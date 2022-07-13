import React from 'react';
import ReviewSingle from './ReviewSingle';
const ReviewRow = ({ rowData, hiddenThird, isExpanded }) => {
  return (
    <>
      {rowData.map((data) => {
        return (
          <ReviewSingle
            data={data}
            isExpanded={isExpanded}
            hiddenThird={hiddenThird}
            key={data.name}
          />
        );
      })}
    </>
  );
};

export default ReviewRow;
