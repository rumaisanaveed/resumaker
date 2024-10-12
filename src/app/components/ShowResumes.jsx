import { PiDotsThreeVerticalLight } from "react-icons/pi";
import { MdEditDocument } from "react-icons/md";
import Link from "next/link";
import { Dropdown } from "antd";

export const ShowResumes = ({ resumes, isDeleting, handleDelete }) => {
  return (
    <>
      {resumes?.map((resume) => (
        <div
          key={resume.id}
          className="relative border border-gray-100 shadow pt-2 w-[300px] sm:w-full flex items-center justify-center transition-all rounded-lg h-[350px] md:h-[300px] border-dashed"
        >
          <MdEditDocument style={{ color: resume.color, fontSize: 50 }} />
          <div className="absolute bottom-0 pl-3 left-0 h-10 w-full bg-gray-100 rounded-b-lg flex items-center justify-between">
            <p className="text-sm text-black">{resume.resumeTitle}</p>
            <Dropdown
              menu={{
                items: [
                  {
                    key: "1",
                    label: (
                      <p
                        className="cursor-pointer"
                        onClick={() => handleDelete(resume.id)}
                      >
                        {isDeleting ? <>Deleting</> : <>Delete</>}
                      </p>
                    ),
                  },
                  {
                    key: "2",
                    label: <Link href="/view-resume">Edit</Link>,
                  },
                ],
              }}
              placement="bottomRight"
            >
              <PiDotsThreeVerticalLight
                style={{
                  fontSize: "25px",
                  color: "black",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              />
            </Dropdown>
          </div>
        </div>
      ))}
    </>
  );
};
