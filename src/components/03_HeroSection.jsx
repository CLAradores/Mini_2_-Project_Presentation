import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="hero  herotext">
      <div
        className="text-white flex flex-col justify-center text-center"
        style={{ height: '65vh' }}
      >
        <h1 className="text-5xl font-bold max-auto mb-10">
          Pursue Your Dream Residence
        </h1>
        <h3 className="text-md mx-auto" style={{ width: '39rem' }}>
          Your Source for Dream Homes! Explore a world of curated real estate
          listings designed to fulfill your homeownership dreams. Whether you're
          buying, selling, or just exploring, we're here to guide you every step
          of the way. Start your real estate journey with us today!"
        </h3>
      </div>
    </div>
  );
};
