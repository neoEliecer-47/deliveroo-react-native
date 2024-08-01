import sanityClient, { SanityClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


const client = SanityClient({
    projectId: 'mviv5v2v',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2022-03-07'
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

export default client