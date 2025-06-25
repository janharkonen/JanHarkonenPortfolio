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
          Initially the purpose was to create a separate API endpoint for my product database in my other project
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
          Let&apos;s make a comparison, shall we?
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
          using pagination and filtering. For RedisSearch, I used the Redis&apos; NodeJS client to query the database from 
          NextJS AppRouter&apos;s API routes, but for the hashmap version I brute forced it. 
          I simply iterated over the hashmap and then filtered the products based on the search query. The only 
          optimization I did was the inverted index for the hashmap based on the supplier name.
        </p>
        <p className="text-base mt-4">
          The results were quite interesting. Here is a summary of some of the observations I made:
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
      <p className="text-base mt-4">
        We have to keep in mind that the size of the whole corpus is only about 100MB large. First of all, for small lists 
        of items the Go solution is faster. That might be because in Go a simple loop is very efficient and can even run concurrently, 
        whereas in RedisSearch the index is tokenized for each column and then the results are then aggregated. For bigger lists I witnessed 
        something odd. The Redis solution was performing very well in O(1) time, whereas the Go solution was performing sometimes just as well
        and sometimes at 2x or 4x the time. I suspect that it might be because some of the hashmap elements might be a longer character string, in
        which case the Go slice doubles in size. For even bigger elements the slice size quadruples so the time to resolve the query apparently
        grows in O(n²) time unpredictably. For a more definitive answer I&apos;d have to investigate this phenomenon more thoroughly.
        The Docker image size is quite interesting. The Go solution is only 20MB large, whereas the Redis solution is 830MB large.
        That&apos;s a 41.5x difference. The Go solution is also much easier to maintain and deploy. The Redis solution is more complex and 
        requires a more robust infrastructure.
      </p>
      <p className="text-base mt-4">
        The biggest issue with the Redis solution was the tokenization strategy. I wanted my front end to react to writing text in the 
        filter from the very first character written. This wasn&apos;t doable with RedisSearch because the index tokenizes each word and 
        whitespace separately. The RedisCLI&apos;s query builder did support wildcard notation (e.g. &quot;*thisstringshouldneintheresult*&quot; )
        but it didn&apos;t allow for a single-character wildcard (e.g. *t*) or a string with a whitespace (e.g. *thisstringisintheresult *). 
        I probably could have used a simple regex to fix that issue, but it would make the code a mess. Perhaps I could experiment with just 
        loading the JSON entries into the database and then create a custom Lua script to search the database using EVAL or Redis Functions? 
        Considering Lua is a scripting language I suspect that it would still be slower than the Go solution.
      </p>
      <p className="text-base mt-4">
        This brings me to my next point of maintainability. The Go solution is much easier to understand, whereas the
        Redis solution requires using the Redis NodeJS client and knowledge on how to build a RedisSearch query. The
        Docker image size was over 40x larger for the Redis solution. The Go solution is also much easier to deploy and 
        scale. The Redis solution requires a more robust infrastructure and a more complex deployment process.
      </p>
      <p className="text-base mt-4">
        The way I built my Go solution was a bit outside the box, because it clearly breaks the rule of a stateless API, because it 
        had a global variable to store the hashmap. I did this because I wanted to avoid the overhead of creating a new hashmap for 
        each request and it does pay off performance-wise. 
      </p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Key Features</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Search products with pagination</li>
          <li>Filter products by input text</li>
          <li>Great UX with extremely fast search performance</li>
        </ul>
      </div>
          
      <div className="overflow-x-auto">
      <h3 className="mt-4 text-lg font-semibold mb-2">Tech stack</h3>
        <div className="flex flex-wrap gap-4">
        <ul className="list-disc pl-5 space-y-1 ">
            <li>
              <div className="flex items-center gap-2">
                <span>Front-end:</span> 
                <BrandedItemBadge brandKey="nextjs" />
                <BrandedItemBadge brandKey="react" />
                <BrandedItemBadge brandKey="typescript" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>API:</span> 
                <BrandedItemBadge brandKey="go" />
                <BrandedItemBadge brandKey="gin" />
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span>Database:</span> 
                <BrandedItemBadge brandKey="redis" />
                <BrandedItemBadge brandKey="redissearch" />
                <BrandedItemBadge brandKey="redisjson" />
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
                <BrandedItemBadge brandKey="hetzner" />
                <BrandedItemBadge brandKey="debian" />
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
                <span>IDE / AI:</span> 
                <BrandedItemBadge brandKey="cursor" />
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
            <li>Redisstack / RedisSearch / RedisJSON</li>
            <li>Search concepts: inverted index, tokenization, wildcard, pagination, filtering</li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}
