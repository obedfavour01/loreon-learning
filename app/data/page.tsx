import AboutData from "@/components/Data/AboutData"
import DataPower from "@/components/Data/DataPower"
import HeroData from "@/components/Data/HeroData"
import Admission from "@/components/Devops/Admission"
import Details from "@/components/Devops/Details"
import Fees from "@/components/Devops/Fees"
import Requirements from "@/components/Devops/Requirements"
import Skills from "@/components/Devops/Skills"
import FAQ from "@/components/Landing/FAQ/FAQ"

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroData />
      <Details type="data" />
      <AboutData />
      <Skills />
      <Fees type='data' />
      <DataPower />
      <Admission type='data' />
      <FAQ variant='light' />

    </div>
  )
}

export default page