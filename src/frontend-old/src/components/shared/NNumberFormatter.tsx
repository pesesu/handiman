type NumberFormatterProps = {
    value: number | string;
  };
  
  const NumberFormatter: React.FC<NumberFormatterProps> = ({ value }) => {
    // Convert value to number and format with commas
    const formattedValue = Number(value).toLocaleString();
    
    return <span>{formattedValue}</span>;
};
  
export default NumberFormatter;
