import "./progress-bar.css";
const ProgressBar = ({ progress = 0 }) => {
  return (
    <div className="body">
      <div className="progress-bar">
        <div
          className="progress-bar-filler"
          style={{ transform: `translateX(${progress - 100}%)` }}
        />
      </div>
    </div>
  );
};
export default ProgressBar;
