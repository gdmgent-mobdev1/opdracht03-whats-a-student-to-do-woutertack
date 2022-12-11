// My Elements helper
interface options {
  textContent?: string,
  id?: string,
  className?:string,
  onClick?:()=> void,
  size?:number,
  children? : [],
  innerHTML?: any,
  name?: string,
  type?: string,
  placeholder?: string,
  src?: any,

}
const Elements = {
    createButton({ textContent = '',id= '',className='', onClick }: options) {
        const button = document.createElement('button');
        button.textContent = textContent;
        button.id = id;
        button.className = className
        if (onClick) {
          button.addEventListener('click', () => { onClick(); });
        }
        return button;
      },
    
      createButtonSecondary({ textContent = '',id = '', className ='', onClick, children = [] } : options) {
        const button = document.createElement('button');
        button.textContent = textContent;
        button.id = id;
        button.className= className;
        if (onClick) {
          button.addEventListener('click', () => { onClick() ; });
        }
        if (children.length) {
          children.forEach((child: any) => {
            if (child instanceof Element) {
              button.appendChild(child);
            }
          });
        }
        return button;
      },
      

    // createHeader({ size=1, textContent ='', id= '', className=''}: options){
    //     if(size<1 || size>6) return null;
    //     const header = document.createElement(`h${size}`);
    //     header.id = id;
    //     header.className= className
    //     header.textContent =textContent;
    //     return header;
    // },

    
      createInput({id = '', className='',type= 'text', name='' , placeholder= ''}: options) {
        const input = document.createElement('input');
        input.id = id;
        input.type = type;
        input.name = name;
        input.className = className
        input.placeholder = placeholder;
        return input;
      },

      createContainer({id = '',className='', innerHTML = '', children = []}: options) {
        const container = document.createElement('div');
        container.id = id
        container.className= className;
        container.innerHTML = innerHTML;
        if (children.length) {
          children.forEach((child: any) => {
            if (child instanceof Element) {
              container.appendChild(child);
            }
          });
        }
        return container ;
      } ,
    

      createP({ textContent = ' ', id= '', className='' }: options) {
        const p = document.createElement('p');
        p.id = id;
        p.className= className
        p.textContent = textContent;
        
        return p;
      },

      createBr() {
        const br = document.createElement('br');
        return br;
      },
      
    
      createSocialMediaButton({ id= '',className='', innerHTML, onClick }: options) {
        const socialMedia = document.createElement('i');
        socialMedia.id = id;
        socialMedia.className= className
        socialMedia.innerHTML = innerHTML;
        if (onClick) {
         socialMedia.addEventListener('click', () => { onClick(); });
       }
         return socialMedia;
       },
    
       createLogo({ id= '', className='', innerHTML= ''  }: options) {
        const logo = document.createElement('i');
        logo.id = id;
        logo.className= className
        logo.innerHTML = innerHTML;
        
        
         return logo;
       },

       createForm({ id = "", className='', children = [] }: options) {
        const form = document.createElement('form');
        form.id = id;
        form.className= className
       
        if (children.length) {
          children.forEach((child: any) => {
            if (child instanceof Element) {
              form.appendChild(child);
            }
          });
        }
        return form;
      },
    
}

export default Elements