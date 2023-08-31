// let count = 0;
const handel =async () => {
    // console.log('daisy UI')
   const response = await fetch('https://openapi.programming-hero.com/api/news/categories')
   const data =await response.json();
   const tabContainer =document.getElementById('tab-container')
   const trimData = data.data.news_category.slice(0,8);
  trimData.forEach((category)=> {
    // count =count + 1;
    const div = document.createElement('div')
    div.innerHTML=`
      <a onclick="handleLoadNews('${category.category_id}')" class="tab">${category.category_name}</a>    
      `;
      tabContainer.appendChild(div);
}) ;

}
const handleLoadNews = async (categoryId) => {
    const response =await fetch (`https://openapi.programming-hero.com/api/news/category/${categoryId}`
    );
    const data = await response.json();
    // console.log(data.data);
    const cardContainer = document.getElementById('card-container');
    data.data.forEach((news) => {
        // console.log(news);
        const div = document.createElement('div')
        div.innerHTML=`
        <div class="card mt-5 mx-auto w-96 bg-base-100 shadow-xl">
            <figure><img src="${news.image_url}" /></figure>
            
            <div>
            <div class="card-body flex justify-between">
              <h2 class="card-title">${news.title}</h2>
              <p>${news.details.slice(0,50)}</p>
              <h3 class="ml-5">Total View:${news.total_view? news.total_view: "No Views"}</h3>
              <div class="badge badge-secondary p-5"> ${news?.rating?.badge}
               
              </div>
              <div>
              <img class="rounded-full w-12" src=" ${news.author?.img}"
              <small class="text-bold">${news.author?.name}</small></div>
              <small class="text-bold">${news.author?.published_date}</small></div>
              
              </div>
             
              
              
         
          `
          cardContainer.appendChild(div);
    })


    // console.log(categoryId);
}
handel();