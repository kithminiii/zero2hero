"use strict";(self.webpackChunkzero_2_hero=self.webpackChunkzero_2_hero||[]).push([[2090],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4130:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),r=["components"],l={sidebar_position:2},s="Python Packages",p={unversionedId:"machine-learning/Python-Packages",id:"machine-learning/Python-Packages",isDocsHomePage:!1,title:"Python Packages",description:"It is important to know about the Python packages that we are using in ML and Data Science.",source:"@site/docs/machine-learning/Python-Packages.md",sourceDirName:"machine-learning",slug:"/machine-learning/Python-Packages",permalink:"/zero2hero/docs/machine-learning/Python-Packages",editUrl:"https://github.com/sliit-foss/zero2hero/edit/master/docs/machine-learning/Python-Packages.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Machine Learning vs AI vs Deep Learning vs Neural Networks",permalink:"/zero2hero/docs/machine-learning/AI ML"},next:{title:"What is Postman?",permalink:"/zero2hero/docs/Postman/Postman"}},u=[{value:"1. PIP",id:"1-pip",children:[],level:2},{value:"2. Numpy",id:"2-numpy",children:[],level:2},{value:"3. Pandas",id:"3-pandas",children:[],level:2},{value:"4. Matplotlib",id:"4-matplotlib",children:[],level:2},{value:"5. Scipy",id:"5-scipy",children:[],level:2},{value:"6. Scikit-learn",id:"6-scikit-learn",children:[],level:2},{value:"7. Plotly",id:"7-plotly",children:[],level:2},{value:"8. OpenCV",id:"8-opencv",children:[],level:2},{value:"9. Tensorflow",id:"9-tensorflow",children:[],level:2},{value:"10. Keras",id:"10-keras",children:[],level:2},{value:"11. PyTorch",id:"11-pytorch",children:[],level:2}],c={toc:u};function d(e){var t=e.components,l=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"python-packages"},"Python Packages"),(0,i.kt)("p",null,"It is important to know about the Python packages that we are using in ML and Data Science."),(0,i.kt)("p",null,"At beginning level is might not necessary to know about the packages in detail, but it is better to have some idea on them."),(0,i.kt)("h2",{id:"1-pip"},"1. PIP"),(0,i.kt)("p",null,"pip is a package manager for Python. It is used to install and manage other ",(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/"},"Python packages"),"."),(0,i.kt)("p",null,"After installing python you can use pip."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"C:> py -m pip --version\npip X.Y.Z from ... (python 3.N.N)\n")),(0,i.kt)("p",null,"if that's working then you have pip. To install packaged you can run below code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"C:> py -m pip install projectName\n[...]\nSuccessfully installed projectName\n")),(0,i.kt)("p",null,"if you are using pip in python environment just use ",(0,i.kt)("inlineCode",{parentName:"p"},"pip install projectName")," without ",(0,i.kt)("inlineCode",{parentName:"p"},"py -m")),(0,i.kt)("p",null,"To learn more about pip follow this link. ",(0,i.kt)("a",{parentName:"p",href:"https://pip.pypa.io/en/stable/getting-started/"},"https://pip.pypa.io/en/stable/getting-started/")),(0,i.kt)("h2",{id:"2-numpy"},"2. Numpy"),(0,i.kt)("p",null,"Numpy is a one of mostly used Python package for scientific computing. Numpy stands for Numerical Python.\nIt is kind of foundation of all data science and machine learning packages, an essential package for all math-intensive computations with Python like pandas and matplotlib."),(0,i.kt)("p",null,"Numpy provides multidimensional arrays object and masks, matrices, fast array-vector and matrix operations, linear algebra, random number generation, Fourier transforms and random data generation.\nThese things are very useful for data science and machine learning."),(0,i.kt)("p",null,"To learn more about Numpy follow this link. ",(0,i.kt)("a",{parentName:"p",href:"https://numpy.org/"},"https://numpy.org/")),(0,i.kt)("h2",{id:"3-pandas"},"3. Pandas"),(0,i.kt)("p",null,"Pandas is a powerful Python library for data analysis and manipulation.\nIt is built mostly on Numpy. Data is very important in Machine learning."),(0,i.kt)("p",null,"Pandas has functions for analyzing big data based on statistical theories, clean messy data, exploring, and manipulating data."),(0,i.kt)("p",null,"Learn more on Pandas ",(0,i.kt)("a",{parentName:"p",href:"https://pandas.pydata.org/pandas-docs/stable/user_guide/10min.html#min"},"https://pandas.pydata.org/pandas-docs/stable/user_guide/10min.html#min")),(0,i.kt)("h2",{id:"4-matplotlib"},"4. Matplotlib"),(0,i.kt)("p",null,"Matplotlib is a data visualization library for Python. It is used to plot data and images.\nIt can produce publication quality figures in a variety of hardtop formats and interactive environments across platforms."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img.png",src:a(9388).Z})),(0,i.kt)("p",null,"Learn more on Matplotlib ",(0,i.kt)("a",{parentName:"p",href:"https://matplotlib.org/"},"https://matplotlib.org/")),(0,i.kt)("p",null,"You can find set of examples in ",(0,i.kt)("a",{parentName:"p",href:"https://matplotlib.org/stable/gallery/index.html"},"here")),(0,i.kt)("h2",{id:"5-scipy"},"5. Scipy"),(0,i.kt)("p",null,"Scipy is a Python library for scientific computing. It is used to solve linear equations, optimize, and fit functions.\nEven through Scipy is not commonly used as itself it helps other libraries."),(0,i.kt)("p",null,"It provides core mathematical methods to do the complex machine learning processes."),(0,i.kt)("h2",{id:"6-scikit-learn"},"6. Scikit-learn"),(0,i.kt)("p",null,"Scikit-learn is a Python library for machine learning. It is used to build models and train them."),(0,i.kt)("p",null,"It provides efficient tools for"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Classification"),(0,i.kt)("li",{parentName:"ul"},"Regression"),(0,i.kt)("li",{parentName:"ul"},"Clustering"),(0,i.kt)("li",{parentName:"ul"},"Model Selection"),(0,i.kt)("li",{parentName:"ul"},"Preprocessing (Feature Selection, Normalization)"),(0,i.kt)("li",{parentName:"ul"},"Dimensionality reduction")),(0,i.kt)("p",null,"via a consistence interface in Python. This is made based on the Numpy, Scipy, Matplotlib."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img_1.png",src:a(7282).Z})),(0,i.kt)("p",null,"Learn more on Scikit-learn ",(0,i.kt)("a",{parentName:"p",href:"https://scikit-learn.org/stable/"},"https://scikit-learn.org/stable/")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.tutorialspoint.com/scikit_learn/scikit_learn_introduction.htm"},"www.tutorialspoint.com/scikit_learn")),(0,i.kt)("h2",{id:"7-plotly"},"7. Plotly"),(0,i.kt)("p",null,"Plotly is an alternative to Matplotlib. It can do better and more beautiful, interactive data visualizations. "),(0,i.kt)("p",null,"It is kind of hard to start with compared to Matplotlib, and it is browser-based"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5058).Z})),(0,i.kt)("p",null,"Learn more on Plotly ",(0,i.kt)("a",{parentName:"p",href:"https://plot.ly/python/"},"https://plot.ly/python/")),(0,i.kt)("p",null,"By using Dash python framework which created by creators of Plotly you can create interactive and beautiful web application with need of HTML, CSS and Javascript."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6347).Z})),(0,i.kt)("p",null,"Other uses in Plotly:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9207).Z})),(0,i.kt)("h2",{id:"8-opencv"},"8. OpenCV"),(0,i.kt)("p",null,"OpenCV is a computer vision library. It is basically used to process images and videos."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"face detection"),(0,i.kt)("li",{parentName:"ul"},"object detection"),(0,i.kt)("li",{parentName:"ul"},"Text detection and recognition (ex:hand writings)"),(0,i.kt)("li",{parentName:"ul"},"Video analysis (ex: video stabilization)"),(0,i.kt)("li",{parentName:"ul"},"3D reconstruction"),(0,i.kt)("li",{parentName:"ul"},"Feature extraction"),(0,i.kt)("li",{parentName:"ul"},"Computational photography (advanced image processing, images taken by camera)"),(0,i.kt)("li",{parentName:"ul"},"Shape analysis"),(0,i.kt)("li",{parentName:"ul"},"Optical flow algorithms (ex: track object in a video)"),(0,i.kt)("li",{parentName:"ul"},"Surface matching")),(0,i.kt)("p",null,"OpenCV is written by C++ and has more than 2,500 optimized algorithms."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1514).Z})),(0,i.kt)("p",null,"Learn more on OpenCV ",(0,i.kt)("a",{parentName:"p",href:"https://opencv.org/"},"https://opencv.org/")),(0,i.kt)("h2",{id:"9-tensorflow"},"9. Tensorflow"),(0,i.kt)("p",null,"TensorFlow is Google\u2019s open source AI framework for machine learning and high performance numerical computation. And it is the most popular one out there.\nTensorflow includes many packages and tools such as tensorboard, colab, and the What-If tool."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9579).Z})),(0,i.kt)("p",null,"We will learn more about Tensorflow in later articles. For now,\nThere are manly two method you can use tensorflow:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Installing locally in anaconda and use with jupyter notebook (",(0,i.kt)("a",{parentName:"li",href:"https://www.tensorflow.org/install"},"https://www.tensorflow.org/install"),")"),(0,i.kt)("li",{parentName:"ol"},"Use google colab (",(0,i.kt)("a",{parentName:"li",href:"https://colab.research.google.com/notebooks/welcome.ipynb"},"https://colab.research.google.com/notebooks/welcome.ipynb"),")")),(0,i.kt)("p",null,"Tensorflow can be either run on CPU or GPU. But if you can it is recommended to run on GPU. Otherwise, training and Evaluations will be slow. Sometimes using GPU can be speed upto 30 - 40 times. So you can understand the difference."),(0,i.kt)("p",null,"TensorFlow also have two version for Javascript and Mobile which is TensorFlow.js for Javascript and TensorFlow lite for Mobile."),(0,i.kt)("p",null,"TensorBoard provides the visualization and tooling needed for machine learning experimentation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tracking and visualizing metrics such as loss and accuracy"),(0,i.kt)("li",{parentName:"ul"},"Visualizing the model graph (ops and layers)"),(0,i.kt)("li",{parentName:"ul"},"Viewing histograms of weights, biases, or other tensors as they change over time"),(0,i.kt)("li",{parentName:"ul"},"Projecting embeddings to a lower dimensional space"),(0,i.kt)("li",{parentName:"ul"},"Displaying images, text, and audio data"),(0,i.kt)("li",{parentName:"ul"},"Profiling TensorFlow programs")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5059).Z})),(0,i.kt)("h2",{id:"10-keras"},"10. Keras"),(0,i.kt)("p",null,"Keras is a high-level API for TensorFlow. It is a Python library for building and training neural networks. By using Keras we can rapidly build a deep learning model in a few lines of code.\nSo if you are beginner in machine learning, you can easily understand the concept of Keras and build neural networks by your own."),(0,i.kt)("p",null,"It was developed as part of the research effort of project ONEIROS\n(Open-ended Neuro-Electronic Intelligent Robot Operating System)."),(0,i.kt)("p",null,"Learn more on Keras ",(0,i.kt)("a",{parentName:"p",href:"https://keras.io/"},"https://keras.io")," and ",(0,i.kt)("a",{parentName:"p",href:"https://keras.io/getting_started/"},"https://keras.io/getting_started/")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5005).Z})),(0,i.kt)("h2",{id:"11-pytorch"},"11. PyTorch"),(0,i.kt)("p",null,"PyTorch is the main competitor of the Tensorflow. It is a deep learning framework for Python. It is developed by Facebook.\nPyTorch is a deep learning framework for Python. It is a high-level API for building neural networks."),(0,i.kt)("p",null,"With the latest release of PyTorch, the framework provides graph-based execution, distributed training, mobile deployment, and quantization."),(0,i.kt)("p",null,"PyTorch supports both CPU and GPU computations and offers scalable distributed training and performance optimization in research and production."),(0,i.kt)("p",null,"With extensive tools and libraries, PyTorch provides plenty of resources to support development, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"AllenNLP"),", an open source research library designed to evaluate deep learning models for natural language processing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ELF"),", a game research platform that allows developers to train and test algorithms in different game environments."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Glow"),", a machine learning compiler that enhances performance for deep learning frameworks on various hardware platforms."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FAISS"),", allows developers to quickly search for embeddings of multimedia documents that are similar to each other."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ego4D"),", is a collaborative project, seeking to advance the fundamental AI research needed for multi-modal machine perception for first-person video understanding.")),(0,i.kt)("p",null,"And they have Lists of Libraries models and Datasets which you can find out ",(0,i.kt)("a",{parentName:"p",href:"https://ai.facebook.com/tools#frameworks-and-tools"},"here (https://ai.facebook.com/tools#frameworks-and-tools)")),(0,i.kt)("p",null,"=\nLearn more on PyTorch ",(0,i.kt)("a",{parentName:"p",href:"https://pytorch.org/"},"https://pytorch.org/")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9929).Z})))}d.isMDXComponent=!0},9388:function(e,t,a){t.Z=a.p+"assets/images/img-ab6c0f422be433741968b6b1c3b0d15d.png"},7282:function(e,t,a){t.Z=a.p+"assets/images/img_1-3e67fedc09a27527cd8a061e6ebf8039.png"},9207:function(e,t,a){t.Z=a.p+"assets/images/img_2-fd57b7ed7e4afea8038cee2a80f4f5ad.png"},5058:function(e,t,a){t.Z=a.p+"assets/images/img_3-46c71e637f9e898906e617fa41f6dfd4.png"},6347:function(e,t,a){t.Z=a.p+"assets/images/img_4-21f13797f7e0a588891ec3643312e41c.png"},1514:function(e,t,a){t.Z=a.p+"assets/images/img_5-38abab7f69ad4f41595aff311c101997.png"},5059:function(e,t,a){t.Z=a.p+"assets/images/img_6-7eaff488141084ad97094334cf48bc73.png"},9579:function(e,t){t.Z="data:image/png;base64,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"},5005:function(e,t,a){t.Z=a.p+"assets/images/img_8-929380426e533805d79b47e8f5d76fe2.png"},9929:function(e,t){t.Z="data:image/png;base64,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"}}]);