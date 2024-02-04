
import AllCategories from '../Components/Categories/AllCategories'
import HeaderSlider from '../Components/Slider/HeaderSlider'


const Home = () => {
  return (
    <div>
        <h1 className='text-center mt-5 ' >HOME</h1>
        <HeaderSlider />
        <AllCategories/>
    </div>
  )
}

export default Home