import Plugin from '../../main/ts/Plugin';

declare let tinymce: any;

Plugin();

tinymce.init({
  selector: 'textarea.tinymce',
  plugins: 'code budwriter',
  budwriter: {
    name: 'Andre',
    photoUrl: 'https://www.biggalyoga.com/wp-content/uploads/2018/07/profilecircle-768x814.png',
    key: 'free4all'
  },
  toolbar: 'budwriter',
  height : "600",
  branding: false
});
