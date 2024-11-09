import { Progress, SemanticCOLORS } from 'semantic-ui-react';

interface ProgressBarProps {
  value: number;
  max: number;
    color: SemanticCOLORS;
    progress: 'ratio' | 'percent' | 'value' | undefined;
}
export const ProgressBar = ({ value, max, color, progress ='ratio'}: ProgressBarProps) => {
    return (
      <>
        <Progress
          value={value}
          total={max}
          color={color}
          progress={progress}
          indicating
          className='w-3/4'
          active={false}
        />
      </>
    );
};
