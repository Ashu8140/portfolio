import { FaGithub, FaLinkedin } from "react-icons/fa";

function About(){
    return(
    <div>
<section id="about" className="flex flex-col md:flex-row items-center justify-center text-center md:text-left my-12 p-8 bg-white shadow-lg rounded-lg">
  {/* Profile Image */}
  <img 
    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA5gMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAABAgADBAUGB//EADoQAAEDAgQDBgQEBQQDAAAAAAEAAgMEEQUSITEGQVETImFxgZEUMqGxQlLB0QcjYnLwU2Ph8RUzQ//EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACARAQEAAgIBBQEAAAAAAAAAAAABAhEDITEEEhNBUTL/2gAMAwEAAhEDEQA/AMVqcKAIhfIfTEJggAE1kDBEKBMAFYIEwQTBGagTBQBFBFLWRCWaaOnifNKcrGC7j0CoJIsDsPFAuAvmNgOZXnfEGPyYg57mSvhpIpO6GCz3EfZYTa99U3NW1NS9mXRshuT6LtOC2OV5pHo82J0MLSZauFuXfvBV02NYbVyCOnrYXvJtYOC80qYp6iQtDHsZyaBy6lUSBkNPkjJEjBqLG7vH/Oi38E/WPlv49iCIC4zgrGppqj4Geo7Zgbdhee+P32Xa+i4ZY3G6rtjlMp0BSlMQgstAoimAUAATgIBOqAE4QTBAQnCUJwqhgFEQog50BMAgEwWG0snAQATgIIAmUCICsS1AE4CCZEQI2UsigltFznHMuTDYI72Es4BF7bAn15LpOWi43itvxPEVDA65ZHCTl6FztT9AuvHN5M5+NMPhThWpxZ8hq43RUDnXzutmf/b+69CouFsLomtbHRxutsX6rY4VA2CihjaLWYNuSzHxm3zLpcrUmGOLWSUFK0EsgiaeoaFpcUwehqIjmpmG/PIF0roiC4OAINiFpsQqaWBwjmqY2POzXOXO7dJp5ziuESYVUsrqJvdicHEdLLvsMq2V9BBVxfLKwOt06j0N1gVcMVYySOORrg8WuDdU8IxupqaroX3vTzmw6BwB+91cu8e2fbJl03xCFkyi5KFkbIqKCAJggiFQUwShMEDBOEiIKIsUS3RVGiTAJQnAWGxAThKAnAQQBMFAEwViVAiAiAjZERFRGyoA3WjFLHPxxB2rQQKUPF+oJW9AWIcPnHEWHYgyz6Z8D4+0b6kLeCWF4pdWy/yopfhoW7yF+UHnuuawmaI4y0nFJquRjmgvGazTyFyvSZ8PhqG5poWyWsQXBUQ4RRtqHTNhax25yi1/NdPpetrq2Yina4m8h5FeXVghxR9biVYJGQ07y17WG5v43sBt57dQvUa4NbTtNgWk6+S5Y4dTfGv7HKO1bd1rWcPEKS68ln40HDVHE2timop5S2VuYRS6Ot5c10lGwMxbFABa74zv/thZcGHshMLo4wDH8um3ksB4mosarZ5gwU0xiu9zrkOs1oFulyNUy7iSd9NnZRHz9kFxVFFELqBlAlujdUMEwShS6Cy6gVYcmBQWhRLdRNjThOEAEQstGanShOEBCIQCYWViUQipZEBEGyiKiojfmF9rrbV1QHCnjGUNhLMxO5voPTdamyrxqtZDgzpHm0kL2O3+Zod/2tYLXVRu015cliVTi+dwZlEbBc5tiVRRVrJMjC8XcLt13C1ssNfV1FS6WHNT5yGM7Qt0HPQEn6LpWZO2PWYrW/BvLKujfLEwudlHdbrpvuFpsL+Jq8YbXXhbE6nYw9k67XPBNzblv9Ft5qH4aldBDSU0YkGV41tbxWiOF4hQOb/4unLGl13ESXb5WP6Jrp01p3FMzNvyC4jGZZ8T4rxDDIsvZMjYM1vlsWE6++ngurZiLYqaDtR2cr4yXA8iFpcBkNTBPVvyWmqJHNsNbX3J5nQK5XUYwy1lbW1PM3ulU8lF5xECigUA2RugShdA2bVAuSEpcyirMycOVGZHMhpfnUVGZRDTHCcBKAnRRARAQsmCAgIhAJgFYlMEUAmCIillFEEsqaunjq6eSnlaCyRuUq5TpuqOawCWfD8Qiw7EDkey4gnP/wBB0C9DhkMjBlNx1WnrcLgxbDWRSizwLxyDdjhzC4irxbH+GHmGfPNT37shb+q7ybYt073GKGWZ8b2VEkbQe8G80adhyNY5+YN/E5ec1X8QaiZlg0t57JqPijGMUb8JRRkOkIBlt8gvur7LE+SXw2HE800uM/A0sjpZphlGW1mN5n7roaWBlNTxwxizY2hoVkODU+H0wmbd9Q+wklcbl2hTDRcs79NYigoodlitAhZS6igUpU5VblGgKQlRxVZKB8yXN4qtxSFyC/OoqMxURWSEyUJwiGCIQsiEBCYIWRCIZEIBFVEUQJA1OgXP4txfh1CXRU7hVTjS0bu40+Lv0F1rHG5eEyymPl0NwNSbAbk8lqabE5cVxF9HghhkjhsaipeCWgG9g0Ai50K89xviCvxfM2aoDaflBFcN9eq6H+GGIMp8TqKGQ2bVsaWdM7b6eoP0Xf4dTdcfm3lqPT6VuWnDTuqqmhiqmmOoja5pHRZUYygi1vNLKbjexCSN7cTW8D0gqe0iytaT8uUWC6Wkw2noaRjYmNB0BsALhB1c01QgMbiTrmtor7l04/K0K7qaXzwCaic3MWncOG4XDM4pp6WvqaDE7MkglLO1jacjh1tyXcYrXU2HYa+oqH5WBux5novBsQnNTWTTO0Msheb8rq4cczrOXJ7Zt6/BPFURNlp5GSRu2cx1wU5XkVBWz4fKZaOqdE8/Nl2d5jmutwzjdhyx4nCb7dtENPMt/Zc8+CzuLjzS+XYKKqlqaeriEtLMyVh/Ew3CtXCu2/sCq3BWEqtxUWKnBVucQrXlY7yjUI8qu90SUqinCiUFRBmjZM1KE4VQwTJQmRBuioNlEBXOcR8VwYVeCl7Ooq72Lb91nnbn4LWccY7UQVDcOopnRjJed7NHXOzb8tPuuHyllrADovVx8Es3k8vJzWdRs8T4hxTE7sqagiP/AEohlb/z6latHO4fiQJvuvVJJ4ea23yN1ZTzmJ4c15a5pu1zTYg+CqBtqNwm7V/X6Kj0zhv+IMZgjgx0OEmwqmC4d/cBsfEfRdNNxBhM0BfT4nSu6DtAD7FeF3cDe+/RN2r/AOk+NlzvHK6Y8tj2R2IUTXCWXEaSNu5vK2/tdYdfxxhVDdtLI6slG3ZbepK8nMr/AOn2SFxG7reSTikW81roeI+J63Gpg6qc1rALMhj+Vn7laPOSSd7qpriPlKua5xGpuukknhyt35TMUM/K6DvBDO4aBx9lUZNHVz0kokpp5InX1LDa677AeKI6pjIMQcI59hLs13n0K84Bd1Pss6j3DHb8lzz4scp26YclxvT1y97a3QIXP8GVL30Jp3uvlJdGTrpfULoXLwZ4+3LT3YZe6bUPVD1kPWPIVzbilxVZKZ5VJOqKsDkVUCoitqE4SgJgjI3TBLZEKh1C4NBJ2GpQWq4rrHUeBVT23zyN7JluRdpf0Fz6K4zdkZyuo84xCqFbiVRUOcbyyOcD4cvoseUNyghxJB6KpxyuaengmFyHDo5fUk1NPm27K9tigGttq4+yvcw9FUW23VQpDRs4n0SprKZT+U+yCBrbfMbpXAciSnI0S2QLZHK38x9kbHofZCyBrDkSfREFKAeWvkjZ35T7ILcrLfMUhYC4WN08Yur44bm9kCU8HbVEcfJztfJWxOZNindcQ0PyjT0WZh8Ba+eZwt2cZIWtwpna1Tbm3eufug67AKrsKtgae42Us25ZGk/crtXblec4VJaphI1D5pX+gIavQIXl1PGTuG2Xl9Vj4yer02XmA9Y8qtkKx5SvE9cUSWVRIHNGQ6qlzlG9HzIqu6CDfgKWUCKrAqKKBAwXG/xCqyG0dI0nnK77BdkvNuOJ+2x+RoJyxRsZbobX/UL0enx3m4c91g52RxcN0WP71hzAQIbbvX8Egcxp56+K97ws7MbCziq3C+6YfKCiC3Y3ugosiHO/MVY8M/CD7qooIdUu2oJTZmcwb+aV2TldAbk7uPulKgVgDbbH3QVgkfKbI5nfmKLsv4QUBvqguh3WypW3NrkeSwIclxoVtKQC4Iv6orNbH/LcwEntYnN358lztBJ2DJZrd4DKB1O33st9iEzqekdUQvIcy3dA31WiqZYX1Uhp2ODC+7W33ed/QaoVm4dLaribmsGZYm+Jvmd9l6LRy5qfXkSvOsJiAqgQLtjswO6vcdT/AJ0XeUDv5Jv1XLnm+N14LrNkyOWPLIeqaR4WJK9fMfSkLI8nmqHO1Ue8c1S57fFUW9oeRUVGcKKDrgiooqwiiiiqGC8kxuR0uNYg9+p+KkHoCQPoAoovV6b7eb1H0wJALNPNVP2v4qKL2PIyYiXRi6YGxsooghSlRRBWToha+qCiAhWBRRAp3U2tZRRBkw7raUosFFEGNjsjm0BAOjni601DuX82tJCiiFdFg7A34QD8T3uPiRZdfRf+p3+c0FFnk/it4f1BlO6xZHFRRfIj6zFe43VLiUVFQgcVFFFR/9k=" 
    alt="Ashu Saini" 
    className="w-40 h-40 md:w-52 md:h-52 rounded-full shadow-md"
  />
  
  {/* About Content */}
  <div className="md:ml-8 mt-6 md:mt-0">
    <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
    <p className="text-gray-600 mt-4">
      Hi, I'm <span className="font-semibold text-blue-600">[Ashu Saini]</span>, a passionate 
      <span className="font-semibold"> Frontend Developer</span> with expertise in React.js, JavaScript, and modern UI/UX design.
      I love building interactive web applications and optimizing performance for a seamless user experience.
    </p>
    <p className="text-gray-600 mt-2">
      Currently, I’m working on innovative projects and staying updated with the latest web technologies.
    </p>

    {/* Social Links */}
    <div className="mt-4 flex gap-4 justify-center md:justify-start">
      <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-2xl hover:text-gray-700 transition duration-200" />
      </a>
      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-2xl hover:text-blue-700 transition duration-200" />
      </a>
    </div>
  </div>
</section>

    </div>
    )
}
export default About