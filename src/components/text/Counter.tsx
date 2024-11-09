import CountUp from 'react-countup';

interface CounterProps {
  number: number;
  duration: number;
}

export const Counter = ({ number, duration }: CounterProps) => {
  return (
    <div className=''>
      <CountUp
        duration={duration}
        className='counter'
        separator=','
        end={number}
      />
    </div>
  );
};
