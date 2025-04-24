import React, { useCallback, useRef, useEffect, useState } from 'react';

const Canvas = () => {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  const [isPanning, setIsPanning] = useState(false);
  const [startPoint, setStartPoint] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [scale, ] = useState(1);
  const [buttonTransform, setButtonTransform] = useState('translate(-50%, -50%)');
  const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  const drawGrid = useCallback((ctx) => {
    const gridSize = 50;
    const { width, height } = ctx.canvas;

    ctx.beginPath();
    ctx.strokeStyle = 'white';

    const startX = Math.floor((-offset.x / scale) / gridSize) * gridSize;
    const startY = Math.floor((-offset.y / scale) / gridSize) * gridSize;

    const endX = startX + (width / scale) + gridSize * 2;
    const endY = startY + (height / scale) + gridSize * 2;

    for (let x = startX; x < endX; x += gridSize) {
      ctx.moveTo(x, startY);
      ctx.lineTo(x, endY);
    }

    for (let y = startY; y < endY; y += gridSize) {
      ctx.moveTo(startX, y);
      ctx.lineTo(endX, y);
    }

    ctx.stroke();
  }, [offset, scale]);

  const draw = useCallback((ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.save();
    ctx.translate(offset.x, offset.y);
    ctx.scale(scale, scale);
    drawGrid(ctx);
    ctx.restore();
  }, [offset, scale, drawGrid]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    setContext(ctx);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    draw(ctx);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw(ctx);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [draw]);

  const handleMouseDown = (e) => {
    setIsPanning(true);
    setStartPoint({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseUp = () => {
    setIsPanning(false);
  };

  const handleMouseMove = (e) => {
    if (!isPanning) return;
    const newOffset = {
      x: e.clientX - startPoint.x,
      y: e.clientY - startPoint.y,
    };
    setOffset(newOffset);
    draw(context);
  };

  useEffect(() => {
    const angle = Math.atan2(offset.y, offset.x) * (180 / Math.PI);
    setButtonTransform(`rotate(${angle}deg) translate(-50%, -50%)`);
  }, [offset.x, offset.y]);

  return (
    <div>
      { offset.x !== 0 || offset.y !== 0 ? (
          <button 
          className="Arrow-button"
          onClick={() => setOffset({ x: 0, y: 0 })}
          style={{ 
            transform: buttonTransform,
            border: 'solid black',
            borderWidth: '0 5px 5px 0',
            padding: '1%',
            backgroundColor: 'transparent',
            width: '30px',
            height: '30px',
            position: 'absolute',
            top: '45vh'
          }}>
        </button>
      ) : null}
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{ cursor: isPanning ? 'grabbing' : 'grab', display: 'block' }}
      />
      <div style={{
        position: 'absolute', 
        top: `calc(${center.y + offset.y}px - 30%)`,
        left: `calc(${center.x + offset.x}px - 16%)`,
        pointerEvents: 'none'
      }}>
        <img src="/images/GO.png" alt="GO" style={{
          width: 'auto',
          height: '45vh',
          pointerEvents: 'none',
          backgroundColor: 'transparent',
          padding: '2%',
          margin: '0',
        }} />
        <h2 style={{
          padding: '0',
          paddingLeft: '12%',
          margin: '0'
        }}>
          Genna Olavarri
        </h2>
      </div>
    </div>
  );
};

export default Canvas;
