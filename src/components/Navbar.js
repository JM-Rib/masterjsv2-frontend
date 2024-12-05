import React, {useState} from 'react';
import { MegaMenu } from 'primereact/megamenu';
import { Ripple } from 'primereact/ripple';
import { Avatar } from 'primereact/avatar';


export default function Navbar() {
    const [loaded, setLoaded] = useState(null);

    const itemRenderer = (item, options) => {
        if (item.root) {
            return (
                <a
                    className="flex items-center cursor-pointer px-4 py-2 text-lg font-semibold uppercase relative rounded-full transition hover:bg-gray-200"
                    onClick={(e) => options.onClick && options.onClick(e)}
                >
                    <span className={item.icon} />
                    <span className="">{item.label}</span>
                    <Ripple />
                </a>
            );
        } else if (!item.image) {
            return (
                <a
                    className="flex items-center p-3 mb-2 gap-3 cursor-pointer transition hover:bg-gray-100 rounded-lg"
                    onClick={(e) => options.onClick && options.onClick(e)}
                >
                    <span className="flex items-center justify-center bg-blue-500 text-white w-12 h-12 rounded-full">
                        <i className={`${item.icon} text-xl`} />
                    </span>
                    <span className="flex flex-col gap-1">
                        <span className="text-lg font-medium text-gray-800">{item.label}</span>
                        <span className="text-sm text-gray-500">{item.subtext}</span>
                    </span>
                </a>
            );
        } else {
            return (
                <div
                    className="flex flex-col items-start gap-3 cursor-pointer"
                    onClick={(e) => options.onClick && options.onClick(e)}
                >
                    <img
                        alt="menu-item-demo"
                        src={item.image}
                        className="w-full object-cover rounded-lg"
                    />
                    <span className="text-gray-600">{item.subtext}</span>
                    <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50">
                        {item.label}
                    </button>
                </div>
            );
        }
    };

    const items = [
        {
            label: 'Company',
            root: true,
            template: itemRenderer,
            style: {marginLeft: "12px"},
            items: [
                [
                    {
                        items: [
                            { label: 'Features', icon: 'pi pi-list', subtext: 'Subtext of item', template: itemRenderer  },
                            { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item', template: itemRenderer }
                        ]
                    }
                ],
                [
                    {
                        items: [
                            { label: 'Solutions', icon: 'pi pi-shield', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Faq', icon: 'pi pi-question', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Library', icon: 'pi pi-search', subtext: 'Subtext of item', template: itemRenderer }
                        ]
                    }
                ],
                [
                    {
                        items: [
                            { label: 'Community', icon: 'pi pi-comments', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Rewards', icon: 'pi pi-star', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Investors', icon: 'pi pi-globe', subtext: 'Subtext of item', template: itemRenderer }
                        ]
                    }
                ],
                [
                    {
                        items: [{ image: 'https://primefaces.org/cdn/primereact/images/uikit/uikit-system.png', label: 'GET STARTED', subtext: 'Build spectacular apps in no time.', template: itemRenderer }]
                    }
                ]
            ]
        },
        {
            label: 'Resources',
            root: true,
            template: itemRenderer,
            style: {marginLeft: "12px"},
        },
        {
            label: 'Contact',
            root: true,
            template: itemRenderer,
            style: {marginLeft: "12px"}
        }
    ];

    const start = (
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g mask="url(#mask0_2642_713)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.5357 13.0197L29.2036 17.0218L31.531 21.0161C32.3802 22.4733 32.3802 24.2131 31.5311 25.6702C30.682 27.1274 29.1612 27.9973 27.463 27.9973H22.8081L20.6555 31.6915C19.7975 33.164 18.2608 34.0431 16.5447 34.0431C14.8286 34.0431 13.2918 33.164 12.4337 31.6915L10.2811 27.9973H5.617C3.93113 27.9973 2.42136 27.1337 1.57841 25.6871C0.735451 24.2405 0.735451 22.5131 1.57841 21.0666L3.91045 17.0644L1.58298 13.0702C0.733895 11.613 0.733895 9.87311 1.58298 8.41596C2.43207 6.95878 3.95286 6.08884 5.65104 6.08884H10.306L12.4585 2.39474C13.3165 0.922318 14.8535 0.0430908 16.5695 0.0430908C18.2856 0.0430908 19.8223 0.922227 20.6803 2.39474L22.8329 6.08884H27.4971C29.183 6.08884 30.6927 6.95252 31.5357 8.3991C32.3787 9.84573 32.3787 11.573 31.5357 13.0197ZM16.5695 1.06124C15.225 1.0612 14.0208 1.74999 13.3486 2.90374L11.4927 6.08873H21.6463L19.7904 2.90374C19.1182 1.74999 17.914 1.06124 16.5695 1.06124ZM22.7105 26.1286L22.6607 26.2141L22.6534 26.2266L22.5337 26.432L21.8976 27.5237L21.7881 27.7117L20.4662 29.9803L20.0676 30.6643L19.7869 31.146L19.7763 31.1484L19.77 31.1592C19.0978 32.313 17.8714 32.6453 16.5269 32.6453C15.1843 32.6453 14.004 32.3149 13.3312 31.1641L13.31 31.1588L12.6277 29.9878L12.4567 29.6945L5.09715 17.0644L6.43206 14.7736L6.43225 14.7744L8.78685 10.7356L8.7852 10.7353L9.05248 10.2767L9.05421 10.277L10.9022 7.10709L22.2401 7.10314L28.017 17.0219L22.7105 26.1286ZM30.6411 25.1613C29.9777 26.2996 28.7896 26.9792 27.4629 26.9792H23.4014L28.6101 18.0401L30.641 21.5253C31.3043 22.6636 31.3043 24.0229 30.6411 25.1613ZM2.46839 25.178C3.1256 26.3058 4.30263 26.9791 5.617 26.9791H9.6878L4.50379 18.0826L2.46839 21.5756C1.81123 22.7035 1.81123 24.0502 2.46839 25.178ZM2.47303 12.5611C1.80969 11.4227 1.80969 10.0634 2.47303 8.92507C3.13632 7.78669 4.32437 7.10706 5.65105 7.10706H9.71266L4.50381 16.0462L2.47303 12.5611ZM27.497 7.10706C28.8114 7.10706 29.9885 7.78039 30.6456 8.90826C31.3028 10.036 31.3028 11.3827 30.6456 12.5106L28.6102 16.0036L23.4262 7.10706H27.497Z"
                    fill="var(--primary-color)"
                />
            </g>
            <path d="M22.0969 18.6465L20.3461 18.2616L21.7078 20.1862V26.1522L26.0214 22.3031L26.3764 15.7598L24.2367 16.5296L22.0969 18.6465Z" fill="var(--primary-color)" />
            <path d="M11.2035 18.6465L12.9543 18.2616L11.5926 20.1862V26.1522L7.27906 22.3031L6.92397 15.7598L9.06376 16.5296L11.2035 18.6465Z" fill="var(--primary-color)" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.1761 20.5713L13.7323 18.2618L14.7049 18.8392H18.5955L19.5681 18.2618L21.1243 20.5713V29.2316L19.3056 32.6659H13.6397L12.1761 29.2316V20.5713Z"
                fill="var(--primary-color)"
            />
            <path d="M21.7079 29.8089L24.2367 27.3071V24.8052L21.7079 26.9221V29.8089Z" fill="var(--primary-color)" />
            <path d="M11.5927 29.8089L9.06387 27.3071V24.8052L11.5927 26.9221V29.8089Z" fill="var(--primary-color)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M16.2613 7.09967H14.1215L12.5652 10.7563L15.0941 18.0694H18.401L20.7353 10.7563L19.1791 7.09967H17.0394V18.0694H16.2613V7.09967Z" fill="var(--primary-color)" />
            <path d="M15.0942 18.0694L6.7296 14.9901L5.56244 10.1788L12.7599 10.7562L15.2887 18.0694H15.0942Z" fill="var(--primary-color)" />
            <path d="M18.4011 18.0694L26.7658 14.9901L27.9329 10.1788L20.5409 10.7562L18.2066 18.0694H18.4011Z" fill="var(--primary-color)" />
            <path d="M21.1245 10.1789L24.8545 9.794L22.4862 7.09967H19.7628L21.1245 10.1789Z" fill="var(--primary-color)" />
            <path d="M12.1762 10.1789L8.4462 9.794L10.8145 7.09967H13.5378L12.1762 10.1789Z" fill="var(--primary-color)" />
        </svg>
    );
    const end = <Avatar image="data:image/webp;base64,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dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KCQk8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOklwdGM0eG1wQ29yZT0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcENvcmUvMS4wL3htbG5zLyIgICB4bWxuczpHZXR0eUltYWdlc0dJRlQ9Imh0dHA6Ly94bXAuZ2V0dHlpbWFnZXMuY29tL2dpZnQvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwbHVzPSJodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3htcC8xLjAvIiAgeG1sbnM6aXB0Y0V4dD0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcEV4dC8yMDA4LTAyLTI5LyIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgZGM6UmlnaHRzPSIyMDI0IEdldHR5IEltYWdlcyIgcGhvdG9zaG9wOkNyZWRpdD0iR2V0dHkgSW1hZ2VzIiBHZXR0eUltYWdlc0dJRlQ6QXNzZXRJRD0iMjE4MzEzMjA5OSIgeG1wUmlnaHRzOldlYlN0YXRlbWVudD0iaHR0cHM6Ly93d3cuZ2V0dHlpbWFnZXMuY29tL2V1bGE/dXRtX21lZGl1bT1vcmdhbmljJmFtcDt1dG1fc291cmNlPWdvb2dsZSZhbXA7dXRtX2NhbXBhaWduPWlwdGN1cmwiIHBsdXM6RGF0YU1pbmluZz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi92b2NhYi9ETUktUFJPSElCSVRFRC1FWENFUFRTRUFSQ0hFTkdJTkVJTkRFWElORyIgPgo8ZGM6Y3JlYXRvcj48cmRmOlNlcT48cmRmOmxpPkZsb3JlbmNpYSBUYW4gSnVuPC9yZGY6bGk+PC9yZGY6U2VxPjwvZGM6Y3JlYXRvcj48ZGM6ZGVzY3JpcHRpb24+PHJkZjpBbHQ+PHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5NQURSSUQsIFNQQUlOIC0gTk9WRU1CRVIgMDU6IEt5bGlhbiBNYmFwcGUgb2YgUmVhbCBNYWRyaWQgbG9va3Mgb24gcHJpb3IgdG8ga2ljay1vZmYgYWhlYWQgb2YgdGhlIFVFRkEgQ2hhbXBpb25zIExlYWd1ZSAyMDI0LzI1IExlYWd1ZSBQaGFzZSBNRDQgbWF0Y2ggYmV0d2VlbiBSZWFsIE1hZHJpZCBDLkYuIGFuZCBBQyBNaWxhbiBhdCBFc3RhZGlvIFNhbnRpYWdvIEJlcm5hYmV1IG9uIE5vdmVtYmVyIDA1LCAyMDI0IGluIE1hZHJpZCwgU3BhaW4uIChQaG90byBieSBGbG9yZW5jaWEgVGFuIEp1bi9HZXR0eSBJbWFnZXMpPC9yZGY6bGk+PC9yZGY6QWx0PjwvZGM6ZGVzY3JpcHRpb24+CjxwbHVzOkxpY2Vuc29yPjxyZGY6U2VxPjxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPjxwbHVzOkxpY2Vuc29yVVJMPmh0dHBzOi8vd3d3LmdldHR5aW1hZ2VzLmNvbS9kZXRhaWwvMjE4MzEzMjA5OT91dG1fbWVkaXVtPW9yZ2FuaWMmYW1wO3V0bV9zb3VyY2U9Z29vZ2xlJmFtcDt1dG1fY2FtcGFpZ249aXB0Y3VybDwvcGx1czpMaWNlbnNvclVSTD48L3JkZjpsaT48L3JkZjpTZXE+PC9wbHVzOkxpY2Vuc29yPgoJCTwvcmRmOkRlc2NyaXB0aW9uPgoJPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0idyI/Pgo=" shape="circle" className={loaded===null ? "hidden" : "block"} />;

    return (
        <div className="m-4">
            <MegaMenu model={items} orientation="horizontal" start={start} end={end} breakpoint="960px" className="flex gap-x-4 p-3 surface-0 shadow-2" style={{ borderRadius: '3rem' }} onLoad={()=>{setLoaded(true);}} />
        </div>
    );
}
               