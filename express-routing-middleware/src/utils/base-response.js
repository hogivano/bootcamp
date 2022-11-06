const baseRes = (status, msg = '', data = null) => {
  let success = false

  if (status !== 200 && status !== 201) {
    success = false
  }

  return {
    success,
    message: msg,
    data
  }
}

const metaRes = (status, msg = '', data = null, meta = null) => {
  let success = false

  if (status !== 200 && status !== 201) {
    success = false
  }

  return {
    success,
    message: msg,
    data,
    meta
  }
}

module.exports = {
  base: baseRes,
  meta: metaRes
}