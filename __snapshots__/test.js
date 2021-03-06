exports['sparkz renders svg with array of numbers and default options 1'] = `
<svg width="100" height="30" stroke-width="2"><path class="sparkz--fill" d="M4 26 L 4 26 L 27 7.67 L 50 18.67 L 73 11.33 L 96 4 V 30 L 4 30 Z" stroke="none"></path><path class="sparkz--line" d="M4 26 L 4 26 L 27 7.67 L 50 18.67 L 73 11.33 L 96 4" fill="none"></path></svg>
`

exports['sparkz renders svg for empty values array 1'] = `
<svg width="100" height="30" stroke-width="2"></svg>
`

exports['sparkz renders svg with entirely 0-based values 1'] = `
<svg width="100" height="30" stroke-width="2"><path class="sparkz--fill" d="M4 22 L 4 22 L 27 22 L 50 22 L 73 22 L 96 22 V 30 L 4 30 Z" stroke="none"></path><path class="sparkz--line" d="M4 22 L 4 22 L 27 22 L 50 22 L 73 22 L 96 22" fill="none"></path></svg>
`

exports['sparkz renders svg for 1-item array 1'] = `
<svg width="100" height="30" stroke-width="2"></svg>
`

exports['sparkz renders interactive svg 1'] = `
<svg width="100" height="30" stroke-width="2"><path class="sparkz--fill" d="M4 26 L 4 26 L 50 15 L 96 4 V 30 L 4 30 Z" stroke="none"></path><path class="sparkz--line" d="M4 26 L 4 26 L 50 15 L 96 4" fill="none"></path><line class="sparkz--cursor" x1="-100000" x2="-100000" y1="0" y2="30" stroke-width="2"></line><circle class="sparkz--spot" cx="-100000" cy="-100000" r="2"></circle><rect width="100" height="30" style="fill: transparent; stroke: transparent" class="sparkz--interaction-layer"></rect></svg>
`

exports['sparkz renders svg with custom cursor 1'] = `
<svg width="100" height="30" stroke-width="2"><path class="sparkz--fill" d="M4 15 L 4 15 L 96 4 V 30 L 4 30 Z" stroke="none"></path><path class="sparkz--line" d="M4 15 L 4 15 L 96 4" fill="none"></path><line class="sparkz--cursor" x1="4" x2="4" y1="0" y2="30" stroke-width="3"></line><circle class="sparkz--spot" cx="4" cy="15" r="2"></circle><rect width="100" height="30" style="fill: transparent; stroke: transparent" class="sparkz--interaction-layer"></rect></svg>
`

exports['sparkz renders svg with custom spot 1'] = `
<svg width="100" height="30" stroke-width="2"><path class="sparkz--fill" d="M6 15 L 6 15 L 94 5 V 30 L 6 30 Z" stroke="none"></path><path class="sparkz--line" d="M6 15 L 6 15 L 94 5" fill="none"></path><line class="sparkz--cursor" x1="6" x2="6" y1="0" y2="30" stroke-width="2"></line><circle class="sparkz--spot" cx="6" cy="15" r="3"></circle><rect width="100" height="30" style="fill: transparent; stroke: transparent" class="sparkz--interaction-layer"></rect></svg>
`

exports['sparkz updates interactive svg when mouse moves 1'] = `
<svg width="100" height="30" stroke-width="2"><path class="sparkz--fill" d="M4 26 L 4 26 L 50 15 L 96 4 V 30 L 4 30 Z" stroke="none"></path><path class="sparkz--line" d="M4 26 L 4 26 L 50 15 L 96 4" fill="none"></path><line class="sparkz--cursor" x1="96" x2="96" y1="0" y2="30" stroke-width="2"></line><circle class="sparkz--spot" cx="96" cy="4" r="2"></circle><rect width="100" height="30" style="fill: transparent; stroke: transparent" class="sparkz--interaction-layer"></rect></svg>
`

exports['sparkz renders interactive svg based on the nearest edge 1'] = `
<svg width="100" height="30" stroke-width="2"><path class="sparkz--fill" d="M4 15 L 4 15 L 96 4 V 30 L 4 30 Z" stroke="none"></path><path class="sparkz--line" d="M4 15 L 4 15 L 96 4" fill="none"></path><line class="sparkz--cursor" x1="4" x2="4" y1="0" y2="30" stroke-width="2"></line><circle class="sparkz--spot" cx="4" cy="15" r="2"></circle><rect width="100" height="30" style="fill: transparent; stroke: transparent" class="sparkz--interaction-layer"></rect></svg>
`

exports['sparkz renders interactive svg based on the nearest edge 2'] = `
<svg width="100" height="30" stroke-width="2"><path class="sparkz--fill" d="M4 15 L 4 15 L 96 4 V 30 L 4 30 Z" stroke="none"></path><path class="sparkz--line" d="M4 15 L 4 15 L 96 4" fill="none"></path><line class="sparkz--cursor" x1="96" x2="96" y1="0" y2="30" stroke-width="2"></line><circle class="sparkz--spot" cx="96" cy="4" r="2"></circle><rect width="100" height="30" style="fill: transparent; stroke: transparent" class="sparkz--interaction-layer"></rect></svg>
`

exports['sparkz renders svg with fill 1'] = `
<svg width="100" height="30" stroke-width="2"><path class="sparkz--fill" d="M4 22 L 4 22 L 27 22 L 50 22 L 73 22 L 96 22 V 30 L 4 30 Z" stroke="none" fill="red"></path><path class="sparkz--line" d="M4 22 L 4 22 L 27 22 L 50 22 L 73 22 L 96 22" fill="none"></path></svg>
`
