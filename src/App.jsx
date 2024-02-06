import { Layout } from './components/Layout/Layout'
import { HeroSection } from './components/HeroSection/HeroSection'
import { ContactSection } from './components/ContactSection/ContactSection'

// Treat the App component as you one single page
function App() {
  return (
    <Layout>
      <HeroSection />
      <ContactSection />
    </Layout>
  )
}

export default App
