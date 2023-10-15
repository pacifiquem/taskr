import React, { useState } from "react";
import { ReactComponent as CopyToClipboard } from "../../../assets/copy-to-clipboard.svg";
import { ReactComponent as CopiedCheckMark } from "../../../assets/check-mark-copied.svg";

const BtnCopyToClipboard: React.FC<{ taskTitle: string; taskDescription: string }> = ({ taskTitle, taskDescription }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyText = () => {
    navigator.clipboard.writeText(`${taskTitle} : ${taskDescription}`).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };

  return (
    <>
      {isCopied ? (
        <button title="Copied">
          <CopiedCheckMark className="fill-green-300 w-5 h-5 sm:w-6 sm:h-6 ml-2" />
        </button>
      ) : (
        <button title="Copy Task" onClick={copyText}>
          <CopyToClipboard className="fill-gray-600 w-5 h-5 sm:w-6 sm:h-6 ml-2" />
        </button>
      )}
    </>
  );
};

export default BtnCopyToClipboard;