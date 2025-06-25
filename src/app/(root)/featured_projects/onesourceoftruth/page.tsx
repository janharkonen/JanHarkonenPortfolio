import { BrandedItemBadge } from "@/components/BrandedItemComponents";
import { FeaturedProject, featuredProjects } from "@/lib/featuredProjects";
const project: FeaturedProject = featuredProjects[7]


export default function Home() {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <h2 className="text-xl mb-4">2025</h2>
      <img
      src="https://picapi.janharkonen.fi/api/pics/3a055a19c26743a2a2fc18bf41b41cbf.png"
      alt={project.title}
      className="w-full h-auto max-h-[500px] object-contain rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Overview</h3>
        <p className="text-base mt-4">
          One source of truth is a tool to search and filter a vast array of products blazingly fast.
          Initially the purpose was to create a separate API endpoint for my product databse in my other project
          {<a href="/featured_projects/offer_generator" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline ml-1">
                Offer Generator
          </a>}.
        </p>
        <p className="text-base mt-4">
          I wanted to experiment with search performance and decided to use Go and Redis.
          I made 2 versions: one with RedisSearch and one with a simple hashmap in the Go API layer.
          Let's make a comparison, shall we?
        </p>
        <p className="text-base mt-4">
          The base of the product database is a simple JSON file with over 100 000 products.
          The database can be sharded into multiple parts based on the supplier name. Each supplier 
          had total number of products ranging from 100 to 60 000. Quite the range but that certainly 
          enables a good test case for the search performance.
        </p>
        <p className="text-base mt-4">
          In the Go hashmap version, I used the Gin framework for the REST API and I used a simple hashmap 
          to store the products. I created a single inverted index for the products based on the supplier. 
          On the Redis side, I stored each item as a JSON using RedisJSON and then created a RedisSearch index 
          for all of the columns found in the entire database. Then I created some API routes to query the database 
          using pagination and filtering. For RedisSearch, I used the Redis client to query the database, but 
          for the hashmap version I brute forced it. I simply iterated over the hashmap and then filtered 
          the products based on the search query. The only optimization I did was the inverted index for the hashmap 
          based on the supplier name.
        </p>
        <p className="text-base mt-4">
          The results were quite interesting. Here is a breakdown of some of the observations I made:
        </p>
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold"></th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold text-blue-600 dark:text-blue-400">Go Solution</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold text-red-600 dark:text-red-400">Redis Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-900">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Average query time<br/><span className="text-sm text-gray-500">(4,300 products)</span></td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-green-600 dark:text-green-400 font-medium">8ms</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-yellow-600 dark:text-yellow-400">34ms</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-900">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Average query time<br/><span className="text-sm text-gray-500">(60,000 products)</span></td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-yellow-600 dark:text-yellow-400">45ms / 100ms / 200ms</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-yellow-600 dark:text-yellow-400">50ms</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-900">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Docker image size</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-green-600 dark:text-green-400 font-medium">20MB</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-red-600 dark:text-red-400">830MB</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-900">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Maintainability</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-green-600 dark:text-green-400 font-medium">Easy</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-red-600 dark:text-red-400">Hard</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-900">
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">API</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-yellow-600 dark:text-yellow-400">Not stateless</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-green-600 dark:text-green-400 font-medium">Stateless</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Key Features</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Minimalist and intuitive user interface</li>
          <li>Color-coded progress stages for easy tracking</li>
          <li>Interactive item color change on click</li>
          <li>Real-time data updates for all users</li>
        </ul>
      </div>
          
      <div className="overflow-x-auto">
      <h3 className="mt-4 text-lg font-semibold mb-2">Tech stack</h3>
        <div className="flex flex-wrap gap-4">
        <ul className="list-disc pl-5 space-y-1 ">
            <li>
              <div className="flex items-center gap-2">
                <span>Front-end:</span> 
                <BrandedItemBadge brandKey="svelte" />
                <BrandedItemBadge brandKey="typescript" />
                <BrandedItemBadge brandKey="vite" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Websocket API:</span> 
                <BrandedItemBadge brandKey="nodejs" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Database:</span> 
                <BrandedItemBadge brandKey="redis" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Containerization:</span> 
                <BrandedItemBadge brandKey="docker" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Deployment:</span> 
                <BrandedItemBadge brandKey="aws" />
                <BrandedItemBadge brandKey="ec2" />
                <BrandedItemBadge brandKey="ubuntu" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Reverse proxy:</span> 
                <BrandedItemBadge brandKey="nginx" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>DNS:</span> 
                <BrandedItemBadge brandKey="cloudflare" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>AI tools:</span> 
                <BrandedItemBadge brandKey="Claude" />
                <BrandedItemBadge brandKey="ChatGPT" />
                <BrandedItemBadge brandKey="lechat" />
                <BrandedItemBadge brandKey="deepseek" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>IDE:</span> 
                <BrandedItemBadge brandKey="vscode" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Version control</span>
                <BrandedItemBadge brandKey="git" />
              </div>
            </li>
          </ul>
        </div>
      </div>
          
      <div>
        <h3 className="mt-4 text-lg font-semibold mb-2">What I learned</h3>
        <div className="flex flex-wrap gap-4">
          <ul className="list-disc pl-5 space-y-1">
            <li>Svelte</li>
            <li>Redis</li>
            <li>AWS EC2</li>
            <li>Websocket technology</li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}
