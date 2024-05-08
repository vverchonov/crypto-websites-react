import DateTimeDisplay from "./date-time-display";

const ShowCounter = (props: any) => {
  return (
    <div className="show-counter">
      <a
        href="https://tapasadhikary.com"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <DateTimeDisplay
          value={props.days}
          type={"Days"}
          isDanger={props.days <= 3}
        />
        <p>:</p>
        <DateTimeDisplay value={props.hours} type={"Hours"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={props.minutes} type={"Mins"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay
          value={props.seconds}
          type={"Seconds"}
          isDanger={false}
        />
      </a>
    </div>
  );
};

export default ShowCounter;
