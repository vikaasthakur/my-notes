import Head from "next/head";

import { MdOutlineKeyboardVoice } from "react-icons/md";
import { TbPlus } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { BsCheck2 } from "react-icons/bs";
import { useState } from "react";
import { BsHeart } from "react-icons/bs";

import { AiOutlineDelete } from "react-icons/ai";
import Header from "@/components/Header";

export default function Home() {
  const [noteForm, setNoteForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState([]);
  const CreateNotes = () => {
    if (title && description) {
      const newNote = { title, description, timestamp: new Date() };
      setNotes([newNote, ...notes]);
      setTitle("");
      setDescription("");
      setNoteForm(false);
    }
  };
  const formatElapsedTime = (elapsedTime) => {
    if (elapsedTime < 1000) {
      return "just now";
    } else if (elapsedTime < 60000) {
      return Math.floor(elapsedTime / 1000) + " seconds ago";
    } else if (elapsedTime < 3600000) {
      return Math.floor(elapsedTime / 60000) + " minutes ago";
    } else if (elapsedTime < 86400000) {
      return Math.floor(elapsedTime / 3600000) + " hours ago";
    } else {
      return Math.floor(elapsedTime / 86400000) + " days ago";
    }
  };
  const handleDeleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <>
      <Head>
        <title>My Notes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-black min-h-screen    ">
        <div className=" flex  flex-col gap-3 pt-4  px-8">
          <Header />
          {noteForm ? (
            <div className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-transparent border  py-2 px-4  font-normal tracking-wider rounded-2xl text-white text-lg outline-white"
              />
              <textarea
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-transparent border  py-2 px-4  rounded-2xl text-white text-base outline-white"
              />
            </div>
          ) : null}
          <div className="flex  flex-col gap-3     ">
            {notes.map((notes, index) => (
              <div
                className=" flex flex-col gap-2  bg-[#141413]  text-white p-5 rounded-2xl   w-full"
                key={index}
              >
                <div className="flex  items-start justify-between   ">
                  <h3 className="text-lg  font-normal  ">{notes.title}</h3>
                  <div className="flex justify-center items-center  bg-white bg-opacity-25   h-12 w-12 rounded-full hover:bg-opacity-30">
                    <BsHeart className="h-5 w-5" />
                  </div>
                </div>

                <p className="text-base  font-light  text-gray-400 ">
                  {notes.description}{" "}
                </p>
                <div className="flex gap-3  item-center  justify-between  border-t border-gray-700 pt-3">
                  <p className="  capitalize text-sm  text-gray-400">
                    {formatElapsedTime(Date.now() - notes.timestamp.getTime())}
                  </p>
                  <div className="flex gap-4 text-gray-600">
                    <AiOutlineDelete
                      className="h-6 w-6 cursor-pointer  hover:text-gray-400"
                      onClick={() => handleDeleteNote(index)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="fixed bottom-8  ">
              <div className="flex p-2  gap-1.5  backdrop-blur rounded-full  shadow-sm bg-white  bg-opacity-10 hover:bg-opacity-20 ">
                <div className=" bg-black  h-16 w-16 rounded-full flex justify-center items-center cursor-pointer">
                  {noteForm ? (
                    <BsCheck2
                      className="  h-7 w-7 text-white"
                      onClick={CreateNotes}
                    />
                  ) : (
                    <TbPlus
                      className=" h-7 w-7 text-white"
                      onClick={() => {
                        setNoteForm(true);
                      }}
                    />
                  )}
                </div>
                <div className="  backdrop-blur backdrop-filter  bg-white   bg-opacity-25 h-16 w-16 rounded-full flex justify-center items-center cursor-pointer">
                  {noteForm ? (
                    <RxCross2
                      className="  h-7 w-7  text-white "
                      onClick={() => {
                        setNoteForm(false);
                      }}
                    />
                  ) : (
                    <MdOutlineKeyboardVoice className="  h-7 w-7  text-white " />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
