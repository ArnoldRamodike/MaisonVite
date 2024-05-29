import { AwesomeGraphQLClient } from 'awesome-graphql-client'

const MASTER_URL = process.env.MASTER_URL;

const client = new AwesomeGraphQLClient({ endpoint: MASTER_URL })

const getSliders = async () => { 
  const getSlider =  `
      query GetSliders {
      sliders {
        id
        name
        image {
          url
        }
      }
    }
    `
    try {
      const data = await client.request(getSlider);
      return data;
    } catch (err) {
      console.error(err);
      throw err;  // Re-throw the error to be handled by the caller
    }
  };

const getCategories = async () => { 
  const getCategory =  `
    query GetCategory {
      categories {
        id
        name
        icon {
          url
        }
      }
    }
    `
    try {
      const data = await client.request(getCategory);
      return data;
    } catch (err) {
      console.error(err);
      throw err;  // Re-throw the error to be handled by the caller
    }
  };

const getBusinessLists = async () => { 
  const getBusinessList =  `
  query GetBusinessList {
      businessLists {
        id
        name
        email
        contactPerson
        about
        address
        images {
          url
        }
        categories {
          name
        }
      }
    }
    `
    try {
      const data = await client.request(getBusinessList);
      return data;
    } catch (err) {
      console.error(err);
      throw err;  // Re-throw the error to be handled by the caller
    }
  };

const getBusinessListByCategory = async (category) => { 
  const getBusinessList =  `
      query GetBusinessList {
        businessLists(where: {categories_some: {name: "`+category+`"}}) {
          id
          name
          email
          contactPerson
          about
          address
          images {
            url
          }
          categories {
            name
          }
        }
      }
    `
    try {
      const data = await client.request(getBusinessList);
      return data;
    } catch (err) {
      console.error(err);
      throw err;  // Re-throw the error to be handled by the caller
    }
  };
 

export default {
    getSliders,
    getCategories,
    getBusinessLists,
    getBusinessListByCategory
}

