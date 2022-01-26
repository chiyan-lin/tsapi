const apiRoot = 'src/api';

export let config = {
  interfaceRoot: '/interface',
  serviceRoot: '/service',
  mockOriginDataRoot: '/temp',
  mockDataRoot: '/mock',
};

export function getConfig(opath = apiRoot) {
  return config = {
    interfaceRoot: opath + '/interface',
    serviceRoot: opath + '/service',
    mockOriginDataRoot: opath + '/temp',
    mockDataRoot: opath + '/mock',
  };
}
