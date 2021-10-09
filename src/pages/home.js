const Home = () => {
    return<>
      <div className="home-page-wrap section-padding">
          <div className="home-page">
          <select className="form-select drop-select" aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
           It has survived not only five centuries, but also the leap into electronic typesetting, 
           remaining 
           essentially unchanged. It was popularised in the 1960s with the release of 
           Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
         
          </div>
      </div>
    </>
}

export default Home;