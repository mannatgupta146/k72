import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Stairs = (props) => {
  const currentPath = useLocation().pathname;
  const stairParentRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    tl.set(stairParentRef.current, { display: 'block' })
      .from('.stair', {
        height: 0,
        stagger: { amount: -0.25 },
        duration: 0.5
      })
      .to('.stair', {
        y: '100%',
        stagger: { amount: -0.25 },
        duration: 0.6
      })
      .set(stairParentRef.current, { display: 'none' })
      .set('.stair', { y: '0%' });

    gsap.fromTo(
      pageRef.current,
      { opacity: 0, scale: 1.1 },
      {
        opacity: 1,
        scale: 1,
        delay: 1.2,
        duration: 0.8,
        ease: "power2.out"
      }
    );
  }, [currentPath]);

  return (
    <div>
      <div ref={stairParentRef} className="h-screen w-full fixed z-20 top-0 pointer-events-none">
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef}>{props.children}</div>
    </div>
  );
};

export default Stairs;
