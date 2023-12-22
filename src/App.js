import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SearchBar from './Components/SearchBar';
import ContactForm from './Components/ContactForm';
import AboutUs from './Components/Aboutus';
import Cards from './Components/Cards';




import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GeneralPage from './Components/GeneralPage';
import FamilyPage from './Components/FamilyPage';
import BusinessPage from './Components/BusinessPage';
import WorkPage from './Components/WorkPage';
import ImmigrationPage from './Components/ImmigrationPage';
import TaxPage from './Components/TaxPage';
import RealEstatePage from './Components/RealEstatePage';
import UploadYourDocs from './Components/UploadYourDocs';
import LegalWriting from './Components/LegalWriting';
import FormsAndWaivers from './Components/FormsAndWaivers';
import ContractDrafting from './Components/ContractDrafting';
import LegalConsultations from './Components/LegalConsultations';
import DraftingLegalDocs from './Components/DraftingLegalDocs';
import UsingOurWebsite from './Components/UsingOurWebsite';
import FAQs from './Components/FAQs';
import KnowYourRightss from './Components/KnowYourRightss';
import PageNotFound from './Components/PageNotFound';
import Categories from './Components/Categories';
import AgreementBetweenContractor from './Forms/AgreementBetweenContractor';
import Chatbot from './Components/Chatbot';
import Login from './Login';



function Home() {
  return (
    <div className='content'>
      <SearchBar />
      <Cards/>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contactus" element={<ContactForm />} />
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route path="/Chatbot" element={<Chatbot/>}/>
          <Route path="/GeneralPage" element={<GeneralPage/>}/>
          <Route path="/FamilyPage" element={<FamilyPage/>}/>
          <Route path="/BusinessPage" element={<BusinessPage/>}/>
          <Route path="/WorkPage" element={<WorkPage/>}/>
          <Route path="/ImmigrationPage" element={<ImmigrationPage/>}/>
          <Route path="/TaxPage" element={<TaxPage/>}/>
          <Route path="/RealEstatePage" element={<RealEstatePage/>}/>
          <Route path="/know-your-rights" element={<KnowYourRightss/>}/>
          <Route path="/upload-your-docs" element={<UploadYourDocs/>}/>
          <Route path="/legal-writing" element={<LegalWriting/>}/>
          <Route path="/forms-and-waivers" element={<FormsAndWaivers/>}/>
          <Route path="/contract-drafting" element={<ContractDrafting/>}/>
          <Route path="/legal-consultations" element={<LegalConsultations/>}/>
          <Route path="/drafting-legal-documents" element={<DraftingLegalDocs/>}/>
          <Route path="/using-our-website" element={<UsingOurWebsite/>}/>
          <Route path="/faqs" element={<FAQs/>}/>
          <Route path="/*" element={<PageNotFound/>}/>
          <Route path="/Categories" element={<Categories/>}/>
          <Route path="/AgreementBetweenContractor" element={<AgreementBetweenContractor/>}/>
          <Route path='/Login' element={<Login/>}/>
        

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;