import { useState } from "react";
import { useNavigate } from "react-router";
import { preview } from "../assets";
import { getRandomPrompt } from "../utils/index.js";
import FormField from "../components/FormField";
import Loader from "../components/Loader";
import { useMutation } from "@tanstack/react-query";
import axios from '../lib/axios.js'
const CreatePost = () => {
  const navigate = useNavigate();
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

 

  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const handleSurpriseMe = (e) => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };


   const generateImageMutation = useMutation({
    mutationFn: async (e)=>{
        e.preventDefault();
        try {
          const res = await axios.post(`/dalle/generateImage`, {prompt: form.prompt})
          console.log(res.data)
        } catch (error) {
            console.log('Error Generating Image');
        }
    }
  })

  return (
    <section>
      <div>
        <h1 className="font-extrabold text-[32px]">Create</h1>
        <p className="mt-2 max-w-[700px] text-slate-500">
          Create imaginative and visually stunning images through DALL-E AI
        </p>
      </div>
      <form  className="mt-16 max-w-3xl">
        <FormField
          label="Yourname"
          type="text"
          name="name"
          placeholder="John Doe"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <FormField
          isSupriseMe
          handleSurpriseMe={handleSurpriseMe}
          label="Prompt"
          type="text"
          name="prompt"
          placeholder={
            "A man standing in front of a stargate to another dimension"
          }
          value={form.prompt}
          onChange={(e) => setForm({ ...form, prompt: e.target.value })}
          required
        />

        <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex items-center justify-center">
          {form.photo ? (
            <img
              src={form.photo}
              alt={form.prompt}
              className="w-full h-full object-contain"
            />
          ) : (
            <img
              src={preview}
              alt="preview"
              className="w-9/12 h-9/12 object-contain opacity-40"
            />
          )}

          {generatingImg && (
            <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
              <Loader />
            </div>
          )}
        </div>

        <div className="mt-5 flex gap-5">
          <button
            type="button"
            className="text-white bg-green-700 text-sm font-medium rounded-md w-full sm:w-auto px-5 py-2.5 text-center"
            onClick={generateImageMutation.mutate}
            disabled={generatingImg}
          >
            {generatingImg ? "Generating..." : "Generate Image"}
          </button>
        </div>

        <div className="mt-10">
          <p className="mt-2 text-[#666E75] text-[14px]">
            Once you have created the image you want, you can share it with
            others in the community
          </p>
          <button
            className="mt-3 text-white bg-[#6469FF] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            type="submit"
          >
            {loading ? "Sharing..." : "Share wtih the community"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
