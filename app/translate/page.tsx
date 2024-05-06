import TranslationForm from "@/components/TranslationForm"
import { TranslationLanguages } from "@/types"
import { auth } from "@clerk/nextjs/server"

const translatePage = async () => {

  const { userId } = auth()
  if(!userId) throw new Error("User not logged in")

  const languagesEndpoint = "https://api.cognitive.microsofttranslator.com/languages?api-version=3.0"

  const response = await fetch(languagesEndpoint, {
    next: {
      revalidate: 60 * 60 * 24
    }
  })

  const languages = await response.json() as TranslationLanguages

  return (
    <div>
      {/* translateionForm */}
        <TranslationForm languages={languages} />
      {/* translation history */}
    </div>
  )
}

export default translatePage