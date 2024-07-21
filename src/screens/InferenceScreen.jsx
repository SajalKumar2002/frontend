import React from 'react';

import PromptBar from '../components/PromptBar';
import SidePanel from '../components/SidePanel';

const InferenceScreen = () => {

  const SampleChat = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nesciunt obcaecati nostrum rem eveniet sit culpa necessitatibus excepturi minima ipsam. Nihil est veritatis atque, dolorem adipisci beatae ut alias distinctio."

  return (
    <>
      <div className="container-fluid">
        <div className="row h-100">

          <SidePanel />

          <div className="col-10 bg-inferenceScreen p-0 d-flex flex-column justify-content-between ">

            <div className="col-9 mx-auto pt-5">
              <div className="overflow-auto scrollbar-hide text-white text-end" style={{ maxHeight: "36rem" }}>
                {[1].map((value, index) => (
                  <p>{SampleChat}</p>
                ))}
              </div>
            </div>

            <div>
              <PromptBar />
            </div>

          </div>
        </div>
      </div >
    </>
  )
}

export default InferenceScreen;
