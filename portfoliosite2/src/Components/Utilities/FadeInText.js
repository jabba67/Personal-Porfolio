import React, {useState, useRef, useEffect} from 'react';

function FadeInSection(props) {
    var [isVisible, setVisible] = useState(true);
    const domRef = useRef();

    useEffect(() => {
      const altDomRef = domRef.current;
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.intersectionRatio > 0));
      });
      observer.observe(altDomRef);

      return () => {
          observer.disconnect(altDomRef);
          }
    }, []);

    
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef} 
      >
        {props.children}
      </div>
    );
  }

  export default FadeInSection;