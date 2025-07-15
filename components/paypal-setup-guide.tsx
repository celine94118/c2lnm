"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ExternalLink, Info, CreditCard, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const PaypalSetupGuide = () => {
  const [clientId, setClientId] = useState("")
  const [clientSecret, setClientSecret] = useState("")
  const [sandboxMode, setSandboxMode] = useState(true)
  const [isConfigured, setIsConfigured] = useState(false)
  const { toast } = useToast()

  const handleSaveConfig = () => {
    if (!clientId || !clientSecret) {
      toast({
        title: "Erreur de configuration",
        description: "Veuillez remplir tous les champs.",
        variant: "destructive",
      })
      return
    }

    // In a real application, you would send this to your backend
    // or save it securely (e.g., via environment variables or a database).
    // For this example, we'll simulate saving.
    console.log("PayPal Client ID:", clientId)
    console.log("PayPal Client Secret:", clientSecret)
    console.log("Sandbox Mode:", sandboxMode)

    // Simulate saving to environment variables (this is illustrative, not actual saving)
    // In a real Next.js app, these would be set on Vercel dashboard.
    // process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID = clientId;
    // process.env.PAYPAL_CLIENT_SECRET = clientSecret;
    // process.env.NEXT_PUBLIC_PAYPAL_SANDBOX_MODE = String(sandboxMode);

    setIsConfigured(true)
    toast({
      title: "Configuration PayPal enregistrée !",
      description: "Vos identifiants PayPal ont été sauvegardés (simulé).",
      variant: "success",
    })
  }

  return (
    <Card className="w-full max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border-white/10 text-white">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-white flex items-center gap-2">
          <CreditCard className="w-8 h-8" />
          Configuration PayPal
        </CardTitle>
        <CardDescription className="text-gray-300">
          Connectez votre compte PayPal pour activer les paiements et commencer à générer des revenus.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-start space-x-3 bg-blue-600/20 p-4 rounded-lg border border-blue-500/30">
          <Info className="w-5 h-5 text-blue-300 mt-1 flex-shrink-0" />
          <p className="text-blue-200 text-sm">
            Pour obtenir vos identifiants API (Client ID et Secret), vous devez créer une application REST API sur votre
            tableau de bord développeur PayPal.
            <br />
            <a
              href="https://developer.paypal.com/dashboard/applications"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:underline flex items-center gap-1 inline-flex mt-1"
            >
              Accéder au tableau de bord développeur PayPal <ExternalLink className="w-4 h-4" />
            </a>
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="clientId" className="text-white text-lg mb-2 block">
              PayPal Client ID
            </Label>
            <Input
              id="clientId"
              type="text"
              placeholder="Votre Client ID PayPal"
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <Label htmlFor="clientSecret" className="text-white text-lg mb-2 block">
              PayPal Client Secret
            </Label>
            <Input
              id="clientSecret"
              type="password"
              placeholder="Votre Client Secret PayPal"
              value={clientSecret}
              onChange={(e) => setClientSecret(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="sandboxMode"
              checked={sandboxMode}
              onCheckedChange={(checked) => setSandboxMode(Boolean(checked))}
              className="data-[state=checked]:bg-blue-500 data-[state=checked]:text-white border-white/30"
            />
            <Label htmlFor="sandboxMode" className="text-white text-base">
              Utiliser le mode Sandbox (pour les tests)
            </Label>
          </div>
        </div>

        {isConfigured && (
          <div className="flex items-center gap-2 text-green-400 text-lg font-medium">
            <CheckCircle className="w-6 h-6" />
            Configuration PayPal réussie !
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          onClick={handleSaveConfig}
          className="bg-green-600 hover:bg-green-700 text-white text-lg px-6 py-3 rounded-md shadow-lg"
        >
          Enregistrer la Configuration
        </Button>
      </CardFooter>
    </Card>
  )
}

export default PaypalSetupGuide
