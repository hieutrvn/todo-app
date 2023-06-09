import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import styles from './checkbutton.module.scss';

interface CheckButtonProps {
  checked: boolean
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}

const checkVariants = {
  initial: {
    color: '#fff'
  },
  checked: {
    pathLength: 1
  },
  unchecked: {
    pathLength: 0
  }
};

const boxVariants = {
  checked: {
    background: 'var(--primaryGreen)',
    transition: { duration: 0.1 }
  },
  unchecked: { background: 'var(--gray-2)', transition: { duration: 0.1 } }
};

export const CheckButton = (props: CheckButtonProps): JSX.Element => {
  const { checked, onClick } = props;
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);
  return (
        <motion.div
            variants={boxVariants}
            className={styles.svgBox}
            animate={checked ? 'checked' : 'unchecked'}
            onClick={onClick}
        >
            <motion.svg
                className={styles.svg}
                viewBox="0 0 53 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    variants={checkVariants}
                    animate={checked ? 'checked' : 'unchecked'}
                    style={{ pathLength, opacity }}
                    fill="none"
                    strokeMiterlimit="10"
                    strokeWidth="6"
                    d="M1.5 22L16 36.5L51.5 1"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                ></motion.path>
            </motion.svg>
        </motion.div>
  );
};
