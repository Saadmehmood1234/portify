'use client'
import CountUp from 'react-countup';
import { ReactNode } from 'react';

interface BadgeProps {
  containerStyes?: string;
  icon?: ReactNode; // Icon can be any valid React node
  endCountNum: number;
  endCountText?: string;
  badgeText?: string;
}

const Badge = ({
  containerStyes,
  icon,
  endCountNum,
  endCountText,
  badgeText
}: BadgeProps) => {
  return (
    <div className={`badge ${containerStyes}`}>
      <div className='text-3xl text-white'>{icon}</div>
      <div className='flex item-center gap-x-2'>
        <div className='text-4xl leading-none font-bold text-white'>
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className='max-w-[70px] text-[15px] leading-none font-medium text-black'>{badgeText}</div>
      </div>
    </div>
  );
}

export default Badge;
