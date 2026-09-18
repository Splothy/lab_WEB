window.initializeLabPage = () => {
  // Keep each lab's CSS isolated while allowing the outer page to scroll naturally.
  document.querySelectorAll('.portal-frame').forEach((frame) => {
    let observer;

    const fitContent = () => {
      observer?.disconnect();

      try {
        const content = frame.contentDocument;
        if (!content?.body) return;

        const resize = () => {
          const height = Math.ceil(content.body.getBoundingClientRect().height);
          frame.style.height = `${height}px`;
        };

        observer = new ResizeObserver(resize);
        observer.observe(content.body);
        resize();
      } catch {
        // A local file or a different origin keeps the scrollable CSS fallback.
      }
    };

    frame.addEventListener('load', fitContent);
    fitContent();
  });
};
