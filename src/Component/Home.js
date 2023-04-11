import React from "react";
import Footer from "./Footer/Footer";
import OrderForm from "./Form/OrderForm";
import topbanner from "../assets/topbanner.webp";
import daru from "../assets/daru.webp";
import koila from "../assets/koila.webp";
import josti from "../assets/josti.webp";

import ReactPixel from "react-facebook-pixel";

const Home = () => {
  ReactPixel.track("PageView", {});
  return (
    <div>
      <>
        <main className="bg-slate-200 w-11/12 my-0 mx-auto ">
          <div>
            <img className="w-full" alt="" src={topbanner} />
          </div>
          <p className="text-center p-5 text-2xl text-[#814097] font-bold">
            ত্বকের যত্নে ব্যাবহার করুন হাতে তৈরি প্রাকৃতিক সাবান
          </p>
          <iframe
            className="w-full h-96"
            // height="315"
            src="https://www.youtube.com/embed/IjQEPnN5iAg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="flex justify-center mt-6">
            <a
              href="#form"
              className="rounded-md bg-[#814097] text-white p-3 text-xl"
            >
              এখনি অর্ডার করুন
            </a>
          </div>
          <p className="text-center p-5 text-2xl">
            বাংলাদেশে তৈরি একমাত্র হাতে তৈরি সাবান
          </p>
          {/* 3 soap grid */}
          <div className="flex flex-col sm:flex-col md:flex-col xl:flex-row">
            <div className="m-6 border border-black bg-white rounded-lg p-3 shadow-2xl">
              <img src={daru} alt="Girl in a jacket" width="500" height="600" />
              <h2 className="text-2xl pt-2 text-[#61CE70] font-bold">
                দারুচিনি সাবান বার
              </h2>
              <h4 className="text-lg font-bold py-2">উপকারিতাঃ</h4>
              <p>ব্রণ, মেসতা, কালো দাগ ও লাল রেশ দূর করেউজ্জ্বলতা বাড়াবে।</p>
              <h4 className="text-lg font-bold py-2">উপকরণ</h4>
              <p>
                দারুচিনি, চালের গুড়া, অলিভ অয়েল -কোকোনাট অয়েল -ক্যাস্টর অয়েল
                -এরোমা অয়েল, বৃষ্টির পানি, কস্টিক সোডা, প্রাকৃতিক উপাদান।
              </p>
              <h4 className="text-lg font-bold py-2">ব্যাবহার পদ্ধতি</h4>
              <p>
                ঘুম থেকে উঠে ও ঘুমোতে যাওয়ার আগে এই বার দিয়ে ৩০ সেকেন্ড মুখ ধুয়ে
                নিন।
              </p>
            </div>
            <div className="m-6 border border-black bg-white rounded-lg p-3 shadow-2xl">
              <img
                src={koila}
                alt="Girl in a jacket"
                width="500"
                height="600"
              />
              <h2 className="text-2xl pt-2 text-[#61CE70] font-bold">
                কয়লা সাবান বার
              </h2>
              <h4 className="text-lg font-bold py-2">উপকারিতাঃ</h4>
              <p>ব্রণ, মেসতা, কালো দাগ ও লাল রেশ দূর করেউজ্জ্বলতা বাড়াবে।</p>
              <h4 className="text-lg font-bold py-2">উপকরণ</h4>
              <p>
                দারুচিনি, চালের গুড়া, অলিভ অয়েল -কোকোনাট অয়েল -ক্যাস্টর অয়েল
                -এরোমা অয়েল, বৃষ্টির পানি, কস্টিক সোডা, প্রাকৃতিক উপাদান।
              </p>
              <h4 className="text-lg font-bold py-2">ব্যাবহার পদ্ধতি</h4>
              <p>
                ঘুম থেকে উঠে ও ঘুমোতে যাওয়ার আগে এই বার দিয়ে ৩০ সেকেন্ড মুখ ধুয়ে
                নিন।
              </p>
            </div>
            <div className="m-6 border border-black bg-white rounded-lg p-3 shadow-2xl">
              <img
                src={josti}
                alt="Girl in a jacket"
                width="500"
                height="600"
              />
              <h2 className="text-2xl pt-2 text-[#61CE70] font-bold">
                যষ্টিমধু ও তুলশি সাবান বার
              </h2>
              <h4 className="text-lg font-bold py-2">উপকারিতাঃ</h4>
              <p>
                কালো দাগ ও লাল রেশ দূর করে উজ্জ্বলতা বাড়াবে ও রোদের জালাপোড়া
                থেকে ত্বক কে বাচাবে।
              </p>
              <h4 className="text-lg font-bold py-2">উপকরণ</h4>
              <p>
                তুলসি যস্টিমধু, চালের গুড়া, বৃষ্টির পানি, অলিভ অয়েল -কোকোনাট
                অয়েল -ক্যাস্টর অয়েল -এরোমা অয়েল, কস্টিক সোডা, প্রাকৃতিক উপাদান।
              </p>
              <h4 className="text-lg font-bold py-2">ব্যাবহার পদ্ধতি</h4>
              <p>
                ঘুম থেকে উঠে ও ঘুমোতে যাওয়ার আগে এই বার দিয়ে ৩০ সেকেন্ড মুখ ধুয়ে
                নিন।
              </p>
            </div>
          </div>

          {/* whay buy our product section */}
          <div className="bg-[#5FBD74] my-10 p-5">
            <h1 className="text-4xl p-5 font-bold">
              আমাদের <span className="text-white">প্রডাক্ট</span> <br /> কেন{" "}
              <span className="text-white">কিনবেন?</span>
            </h1>
            <ul className="ml-5">
              <li>🎁 আকর্ষনীয় প্যাকিং সুবিধা।</li>
              <li>
                🚚 ১০০% কোয়ালিটি এবং ৩ দিনের রিটার্ন গ্যারান্টি। সার্বক্ষনিক কল
              </li>
              <li>
                🤑 সাশ্রয়ী মূল্যে বাংলাদেশে হাতে তৈরি কোয়ালিটি প্রোডাক্ট।{" "}
              </li>
              <li>⚡ সারাদেশে ২৪ থেকে ৭২ ঘন্টায় হোম ডেলিভারি।</li>
            </ul>
          </div>

          {/* Order form  */}
          <div id="form" className="my-10 p-5">
            <h1 className="text-center p-5 text-2xl">
              প্রডাক্টটি কিনতে নিচের
              <span className="text-[#5FBD74]"> ফর্মটি পুরন </span>করুন
            </h1>

            {/* <form className="w-full" onSubmit={(event) => handleForm(event)}>
              <div className="ml-2">আপনার নামঃ</div>
              <input
                name="name"
                className="p-2 rounded-lg m-2 w-10/12"
                placeholder="type your Name"
              />
              <div className="ml-2">আপনার ঠিকানাঃ</div>
              <input
                name="address"
                className="p-2 rounded-lg m-2 w-10/12"
                placeholder="Address"
              />
              <div className="ml-2">আপনার ফোন নাম্বারঃ</div>
              <input
                name="number"
                className="p-2 rounded-lg m-2 w-10/12"
                placeholder="Phone Number"
              />
              <div className="ml-2">আপনি কোন সাবানটি নিতে চাচ্ছেনঃ</div>
              <select
                name="types"
                className="p-2 rounded-lg m-2 w-10/12"
                id="countries"
              >
                <option selected>Choose a country</option>
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
              <input
                type="submit"
                value="Please Order"
                className=" text-white bg-orange-600 p-3 rounded-lg mt-5 mr-5 w-full "
              />
            </form> */}
            <OrderForm></OrderForm>
          </div>
          <Footer></Footer>
        </main>
      </>
    </div>
  );
};

export default Home;
