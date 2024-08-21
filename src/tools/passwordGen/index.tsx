import { GeneratePassword } from "js-generate-password";
const PassGen = () => {
    async function GenerateFunction(){  
        const password = GeneratePassword({
            length: 14,
            symbols: true,
          });
          console.log(password)
    }
    GenerateFunction()
  return (
    <div>
      password generator
    </div>
  )
}

export default PassGen
