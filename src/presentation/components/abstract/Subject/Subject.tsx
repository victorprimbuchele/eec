// my
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
// third
import { HiddenText } from "./HiddenText/HiddenText";
import { ISubjectProps } from "./subject-types";

export const Subject: React.FC<ISubjectProps> = ({
  icon,
  subject,
  text,
  fontStyle,
}) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div>
      <div className="flex mb-2 lg:mb-4">
        <button
          onClick={() => setIsHidden(!isHidden)}
          className="text-purple-700 font-bold mr-2 lg:mr-4"
        >
          <FontAwesomeIcon icon={icon} />
        </button>
        <div>
          <h2 className={fontStyle}>{subject}</h2>
        </div>
      </div>
      <div>
        <HiddenText isHidden={isHidden}>{text}</HiddenText>
      </div>
    </div>
  );
};
