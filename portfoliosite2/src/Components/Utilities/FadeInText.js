import React, {useState, useRef, useEffect} from 'react';

function FadeInSection(props) {
    var [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    var count = 0;

    useEffect(() => {
      const altDomRef = domRef.current;
      var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.intersectionRatio > 0));
      },{threshold: .55});
        observer.observe(altDomRef);
      
      

      return () => {
          observer.unobserve(altDomRef);
          }
    }, [count]);

    
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