import TranslationForm from "@/components/TranslationForm"
import { auth } from "@clerk/nextjs/server"

const translatePage = () => {

  const { userId } = auth()
  if(!userId) throw new Error("User not logged in")

  return (
    <div>
      {/* translateionForm */}
        <TranslationForm />
      {/* translation history */}
    </div>
  )
}

export default translatePage