/// <reference types="react" />
import './mylabel.css';
export interface Props {
    /**
     * This text that will be shown in the component
     */
    label?: string;
    /**
     * Sizes we can use in the component
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * All caps
     */
    allCaps?: boolean;
    /**
     * Color in the label
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * font color of the label
     */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: Props) => JSX.Element;
