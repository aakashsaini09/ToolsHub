
// import axios from 'axios';
const AiBot = () => {

    // async function APIFunction(text: string) {
    //     try {
    //         const response = await axios.post(
    //             'https://api.sapling.ai/api/v1/edits',
    //             {
    //                 "key": 'O79QF5BY6II7UQDFQRAMA7N2JYYSWPVT', // replace with your API key
    //                 "session_id": 'test session',
    //                 text,
    //             },
    //         );
    //         const {status, data} = response;
    //         console.log({status});
    //         console.log("response:  ", response)
    //         console.log(JSON.stringify(data, null, 4));
    //     } catch (err: any) {
    //         const { msg } = err.response.data;
    //         console.log({err: msg});
    //     }
    // }
    
  return (
    <>
      {/* <button onClick={() => APIFunction("What and how to can I do in this suituation bro?")} className='px-5 py-3 bg-purple-800 text-white m-5'>Click</button> */}
      <div className='bg-slate-700 min-h-[100vh] w-full text-white'>Ai Rewrite</div>
    </>
  )
}

export default AiBot
