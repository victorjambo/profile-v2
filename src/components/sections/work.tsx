/* eslint-disable @next/next/no-img-element */
import { ExternalLinkIcon, ShareIcon } from "@heroicons/react/outline";
import { SectionHeader } from ".";

const WorkSection: React.FC = () => {
  return (
    <section id="work" className="max-w-[1000px] mx-auto py-[100px]">
      <SectionHeader idx="03." title="Some Things I've Built" />

      <ul className="font-sans space-y-[100px]">
        <li className="grid grid-col-featured gap-[10px] items-center idea">
          <div className="project-content">
            <div>
              <p className="py-[10px] text-green font-mono text-xs">
                Featured Project
              </p>

              <h3 className="mb-5 text-slate-lightest hover:text-green featured-size font-semibold">
                <a href="#">Halcyon Theme</a>
              </h3>

              <div className="text-slate-light p-[25px] rounded bg-blue-navy-light project-description-shadow">
                <p>
                  A web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </p>
              </div>

              <ul className="flex flex-wrap mt-[25px] mb-[10px] font-mono text-slate-light text-xs">
                <li>React</li>
                <li>Styled Components</li>
                <li>Express</li>
                <li>Spotify API</li>
                <li>Heroku</li>
              </ul>

              <div className="flex items-center mt-[10px] -ml-[10px] text-slate-lightest externals">
                <a
                  href="#"
                  className="text-green border border-green rounded py-3 px-4 font-mono m-[10px] text-xs"
                >
                  Learn More
                </a>
                <a href="#" className="p-[10px]">
                  <ShareIcon className="w-5 h-5" />
                </a>
                <a href="#" className="p-[10px]">
                  <ExternalLinkIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="project-image">
            <a href="#">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAACBklEQVQoz23O7W6bMBQGYO5iSoEY7GBjY2MwH/6AJk3SrStVlQbabJq23f9lTCRR1x+VHllH57zHtie76VOZmbidhDuf9vOMl7vxgyl3k7Bj2b/uH093D6dm89rfv3X7N2Gny/Rj3hP2+J+Zcf2iuvHv7x/jdHo5vv359fM4nrL2Ov2Y94R5eSfdUXZj4UbpRqaP3BxzN3Izk+4qn9+45j2uD1wfhDlwc5BuLLqp6Maz6XLLpX4vcnvk5zA3B4+3z0I/0XpgzROrh7Sa0Xq4dLL2Oa0er+qBzc2B1XOeNoPH6iHhOiblTSQT0SNuAFE+Uj4sfVjG1CTCkWIdEwNQuYjLm7j0oQqQiqjziHpIWJPr9ZI6IDa0vaftGkoXi36ZuiXRMe9w+ZVXD7zdFlUPM+OjClJDilsvVd8xazBvF7EE1LF6l5s9re6R3GK5BakNsUGpw/ldVN5JZRKpfVQBXENmPVJ+A6hEpFlEwk8aLG+pcii3ATbBqvGhilKbFDuidqxaA96F2IH5RyYkxlvJPYhFKjdLogOssVpz2ydNH3MN0yZMKjAvb0W9E/WGlBvIbudNrENqvVW+A7Egol/AMsQaFWskWsRNIjrITLCqQGri1BLek9zBrLmBlT9Ty6T1VmIbRDxaqS9hFiRNgFsf1T6q3oHUQNbHqQXMwsxA2kbUAKLDpP0H4Daf056mKVMAAAAASUVORK5CYII="
                alt=""
                className="w-full object-cover"
              />
            </a>
          </div>
        </li>

        <li className="grid grid-col-featured gap-[10px] items-center idea">
          <div className="project-content">
            <div>
              <p className="py-[10px] text-green font-mono text-xs">
                Featured Project
              </p>

              <h3 className="mb-5 text-slate-lightest hover:text-green featured-size font-semibold">
                <a href="#">Halcyon Theme</a>
              </h3>

              <div className="text-slate-light p-[25px] rounded bg-blue-navy-light project-description-shadow">
                <p>
                  A web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </p>
              </div>

              <ul className="flex flex-wrap mt-[25px] mb-[10px] font-mono text-slate-light text-xs">
                <li>React</li>
                <li>Styled Components</li>
                <li>Express</li>
                <li>Spotify API</li>
                <li>Heroku</li>
              </ul>

              <div className="flex items-center mt-[10px] -ml-[10px] text-slate-lightest externals">
                <a
                  href="#"
                  className="text-green border border-green rounded py-3 px-4 font-mono m-[10px] text-xs"
                >
                  Learn More
                </a>
                <a href="#" className="p-[10px]">
                  <ShareIcon className="w-5 h-5" />
                </a>
                <a href="#" className="p-[10px]">
                  <ExternalLinkIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="project-image">
            <a href="#">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAACBklEQVQoz23O7W6bMBQGYO5iSoEY7GBjY2MwH/6AJk3SrStVlQbabJq23f9lTCRR1x+VHllH57zHtie76VOZmbidhDuf9vOMl7vxgyl3k7Bj2b/uH093D6dm89rfv3X7N2Gny/Rj3hP2+J+Zcf2iuvHv7x/jdHo5vv359fM4nrL2Ov2Y94R5eSfdUXZj4UbpRqaP3BxzN3Izk+4qn9+45j2uD1wfhDlwc5BuLLqp6Maz6XLLpX4vcnvk5zA3B4+3z0I/0XpgzROrh7Sa0Xq4dLL2Oa0er+qBzc2B1XOeNoPH6iHhOiblTSQT0SNuAFE+Uj4sfVjG1CTCkWIdEwNQuYjLm7j0oQqQiqjziHpIWJPr9ZI6IDa0vaftGkoXi36ZuiXRMe9w+ZVXD7zdFlUPM+OjClJDilsvVd8xazBvF7EE1LF6l5s9re6R3GK5BakNsUGpw/ldVN5JZRKpfVQBXENmPVJ+A6hEpFlEwk8aLG+pcii3ATbBqvGhilKbFDuidqxaA96F2IH5RyYkxlvJPYhFKjdLogOssVpz2ydNH3MN0yZMKjAvb0W9E/WGlBvIbudNrENqvVW+A7Egol/AMsQaFWskWsRNIjrITLCqQGri1BLek9zBrLmBlT9Ty6T1VmIbRDxaqS9hFiRNgFsf1T6q3oHUQNbHqQXMwsxA2kbUAKLDpP0H4Daf056mKVMAAAAASUVORK5CYII="
                alt=""
                className="w-full object-cover"
              />
            </a>
          </div>
        </li>

        <li className="grid grid-col-featured gap-[10px] items-center idea">
          <div className="project-content">
            <div>
              <p className="py-[10px] text-green font-mono text-xs">
                Featured Project
              </p>

              <h3 className="mb-5 text-slate-lightest hover:text-green featured-size font-semibold">
                <a href="#">Halcyon Theme</a>
              </h3>

              <div className="text-slate-light p-[25px] rounded bg-blue-navy-light project-description-shadow">
                <p>
                  A web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </p>
              </div>

              <ul className="flex flex-wrap mt-[25px] mb-[10px] font-mono text-slate-light text-xs">
                <li>React</li>
                <li>Styled Components</li>
                <li>Express</li>
                <li>Spotify API</li>
                <li>Heroku</li>
              </ul>

              <div className="flex items-center mt-[10px] -ml-[10px] text-slate-lightest externals">
                <a
                  href="#"
                  className="text-green border border-green rounded py-3 px-4 font-mono m-[10px] text-xs"
                >
                  Learn More
                </a>
                <a href="#" className="p-[10px]">
                  <ShareIcon className="w-5 h-5" />
                </a>
                <a href="#" className="p-[10px]">
                  <ExternalLinkIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="project-image">
            <a href="#">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAACBklEQVQoz23O7W6bMBQGYO5iSoEY7GBjY2MwH/6AJk3SrStVlQbabJq23f9lTCRR1x+VHllH57zHtie76VOZmbidhDuf9vOMl7vxgyl3k7Bj2b/uH093D6dm89rfv3X7N2Gny/Rj3hP2+J+Zcf2iuvHv7x/jdHo5vv359fM4nrL2Ov2Y94R5eSfdUXZj4UbpRqaP3BxzN3Izk+4qn9+45j2uD1wfhDlwc5BuLLqp6Maz6XLLpX4vcnvk5zA3B4+3z0I/0XpgzROrh7Sa0Xq4dLL2Oa0er+qBzc2B1XOeNoPH6iHhOiblTSQT0SNuAFE+Uj4sfVjG1CTCkWIdEwNQuYjLm7j0oQqQiqjziHpIWJPr9ZI6IDa0vaftGkoXi36ZuiXRMe9w+ZVXD7zdFlUPM+OjClJDilsvVd8xazBvF7EE1LF6l5s9re6R3GK5BakNsUGpw/ldVN5JZRKpfVQBXENmPVJ+A6hEpFlEwk8aLG+pcii3ATbBqvGhilKbFDuidqxaA96F2IH5RyYkxlvJPYhFKjdLogOssVpz2ydNH3MN0yZMKjAvb0W9E/WGlBvIbudNrENqvVW+A7Egol/AMsQaFWskWsRNIjrITLCqQGri1BLek9zBrLmBlT9Ty6T1VmIbRDxaqS9hFiRNgFsf1T6q3oHUQNbHqQXMwsxA2kbUAKLDpP0H4Daf056mKVMAAAAASUVORK5CYII="
                alt=""
                className="w-full object-cover"
              />
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default WorkSection;
