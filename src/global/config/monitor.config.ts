// import { ConfigService } from "@nestjs/config";
// import { StatusMonitorConfiguration } from "nest-status-monitor";

// const port: number = new ConfigService().get<number>("PORT")

// export const MonitorConfig: StatusMonitorConfiguration = {
//     path: '/monitor',
//     port: port,
//     pageTitle: 'NestJS Status Monitor',
//     ignoreStartsWith: '/health/alive',
//     healthChecks: [
//         {
//             protocol: 'http',
//             host: 'localhost',
//             path: '/health/alive',
//             port: port,
//         },
//         {
//             protocol: 'http',
//             host: 'localhost',
//             path: '/health/dead',
//             port: port,
//         },
//     ],
//     spans: [
//         {
//             interval: 1,
//             retention: 60,
//         },
//         {
//             interval: 5,
//             retention: 60,
//         },
//         {
//             interval: 15,
//             retention: 60,
//         },
//     ],
//     chartVisibility: {
//         cpu: true,
//         mem: true,
//         load: true,
//         responseTime: true,
//         rps: true,
//         statusCodes: true,
//     }
// }