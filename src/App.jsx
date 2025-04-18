// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './component/navbar';
import FooterPune from './component/footer-pune';
import Footer from './component/footer';
import Header from './component/header';
import Cataract from './pages/Ophthalmology/Cataract';
import LasikSurgery from './pages/Ophthalmology/LasikSurgery';
import Hernia from './pages/Laparoscopy/Hernia';
import Appendicitis from './pages/Laparoscopy/Appendicitis';
import Gallbladder from './pages/Laparoscopy/Gallbladder';
import Circumcision from './pages/Urology/Circumcision';
import KidneyStone from './pages/Urology/KidneyStone';
import Hydrocele from './pages/Urology/Hydrocele';
import Frenuloplasty from './pages/Urology/Frenuloplasty';
import KidneyTransplant from './pages/Urology/KidneyTransplant';
import ProstateEnlargement from './pages/Urology/ProstateEnlargement';
import Gynecomastia from './pages/Cosmetic/gynecomastia';
import Lipoma from './pages/Cosmetic/lipoma';
import MoleRemoval from './pages/Cosmetic/MoleRemoval';
import HipReplacement from './pages/orthopaedic/hip-replacement';
import KneeReplacement from './pages/orthopaedic/kneeReplacement';
import ACLTear from './pages/orthopaedic/ACL-tear';
import DiscInjury from './pages/orthopaedic/Disc-injury';
import JoinReplacement from './pages/orthopaedic/Join-replacement';
import KneeArthroscopy from './pages/orthopaedic/knee-Arthroscopy';
import RotatorCuffRepair from './pages/orthopaedic/Rotator-cuff-repair';
import Piles from './pages/proctology/piles';
import Fissure from './pages/proctology/fissure';
import Fistula from './pages/proctology/Fistula';
import Varicocele from './pages/vascular/varicocele';
import VaricoseVein from './pages/vascular/varicose-Vein';
import Bariatric from './pages/Bariatric/Bariatric';
import HospitalSearch from './pages/hospitalSearch';
import DocterSearch from './pages/docterSearch';
import HospitalDetails from './pages/HospitalDetails';
import CampDetails from './pages/camp-details';
import MemberDetails from './pages/MemberDetails';
import Blog from './pages/Blog/blog';
import BlogDetails from './pages/Blog/BlogDetails';
import DoctorList from './pages/DoctorList';
import DoctorDetails from './component/DoctorDetails';
import HospitalList from './pages/hostipalList';
import HospDetails from './pages/hospDetails';
import AppointmentForm from './pages/AppointmentForm';


function App() {
    return (
        <Router>
            <Header/>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/camp-details/:id" element={<CampDetails />} />
                <Route path="/hospital-details/:id" element={<HospitalDetails />} />
                <Route path="/board-member/:id" element={<MemberDetails />} />
                <Route path="/ophthalmology/cataract" element={<Cataract/>} />
                <Route path="/ophthalmology/Lasik" element={<LasikSurgery/>} />
                <Route path="/laparoscopy/hernia" element={<Hernia/>} />
                <Route path="/laparoscopy/appendicitis" element={<Appendicitis/>} />
                <Route path="/laparoscopy/gallbladder-stone" element={<Gallbladder/>} />
                <Route path="/urology/circumcision" element={<Circumcision/>} />
                <Route path="/urology/kidney-stone" element={<KidneyStone/>} />
                <Route path="/urology/Hydrocele" element={<Hydrocele/>} />
                <Route path="/urology/Frenuloplasty" element={<Frenuloplasty/>} />
                <Route path="/urology/Kidney-Transplant" element={<KidneyTransplant/>} />
                <Route path="/urology/Prostate-enlargement" element={<ProstateEnlargement/>} />
                <Route path="/cosmetic/gynecomastia" element={<Gynecomastia/>} />
                <Route path="/cosmetic/lipoma" element={<Lipoma/>} />
                <Route path="/cosmetic/Mole-Removal" element={<MoleRemoval/>} />
                <Route path="/orthopaedic/hip-replacement" element={<HipReplacement/>} />
                <Route path="/orthopaedic/knee-replacement" element={<KneeReplacement/>} />
                <Route path="/orthopaedic/ACL-tear" element={<ACLTear/>} />
                <Route path="/orthopaedic/Disc-injury" element={<DiscInjury/>} />
                <Route path="/orthopaedic/joint-replacement" element={<JoinReplacement/>} />
                <Route path="/orthopaedic/knee-arthroscopy" element={<KneeArthroscopy/>} />
                <Route path="/orthopaedic/Rotator-cuff-repair" element={<RotatorCuffRepair/>} />
                <Route path="/proctology/piles" element={<Piles/>} />
                <Route path="/proctology/fissure" element={<Fissure/>} />
                <Route path="/proctology/Fistula" element={<Fistula/>} />
                <Route path="/vascular/varicocele" element={<Varicocele/>} />
                <Route path="/vascular/varicose-Vein" element={<VaricoseVein/>} />
                <Route path="/Bariatric" element={<Bariatric/>} />
                <Route path="/pages/hospitalSearch" element={<HospitalSearch/>} />
                <Route path="/pages/docterSearch" element={<DocterSearch/>} />
                <Route path="/Blog" element={<Blog/>} />
                <Route path="/Blog/:id" element={<BlogDetails />} />
                <Route path='/doctors' element={<DoctorList/>}/>
                <Route path='/doctor-details/:name' element={<DoctorDetails/>}/>
                <Route path='/hospitalRecords' element={<HospitalList/>}/>
                <Route path='/hospital-details' element={<HospDetails/>}/>
                <Route path='/appointment' element={<AppointmentForm/>}/>
            </Routes>
            <FooterPune />
            <Footer />
        </Router>
    );
}

export default App;