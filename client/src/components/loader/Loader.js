import "./loader.scss";
import { MagnifyingGlass } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loading-container">
      <p className="loading-text">
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      </p>
    </div>
  );
};

export default Loader;
