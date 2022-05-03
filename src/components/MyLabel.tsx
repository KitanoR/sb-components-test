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
};

export const MyLabel = ({ 
  label = 'No Label', 
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor = "#000"
} : Props) => {
  return (
    <span className={`label ${size} text-${color}`} style={{ color: fontColor }}>
      {allCaps ? label.toUpperCase() : label }
    </span>
  )
}