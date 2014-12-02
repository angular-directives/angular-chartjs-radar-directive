/*!
 * AngularJS Chart.js Radar Directive
 *
 * Copyright 2013 Stephane Begaudeau
 * Released under the MIT license
 */
angular.module('angular.directives-chartjs-radar', []).directive('angChartjsRadar', [function () {
  var getOptionsFromScope = function (scope) {
    var options = {};

    var potentialOptions = [
      {key:'chartjsScaleOverlay', value:'scaleOverlay', isBoolean: true},
      {key:'chartjsScaleOverride', value:'scaleOverride', isBoolean: true},
      {key:'chartjsScaleSteps', value:'scaleSteps', isNumber: true},
      {key:'chartjsScaleStepWidth', value:'scaleStepWidth', isNumber: true},
      {key:'chartjsScaleStartValue', value:'scaleStartValue', isNumber: true},
      {key:'chartjsScaleShowLine', value:'scaleShowLine', isBoolean: true},
      {key:'chartjsScaleLineColor', value:'scaleLineColor'},
      {key:'chartjsScaleLineWidth', value:'scaleLineWidth', isNumber: true},
      {key:'chartjsScaleShowLabels', value:'scaleShowLabels', isBoolean: true},
      {key:'chartjsScaleLabel', value:'scaleLabel'},
      {key:'chartjsScaleFontFamily', value:'scaleFontFamily'},
      {key:'chartjsScaleFontSize', value:'scaleFontSize', isNumber: true},
      {key:'chartjsScaleFontStyle', value:'scaleFontStyle'},
      {key:'chartjsScaleFontColor', value:'scaleFontColor'},
      {key:'chartjsScaleShowLabelBackdrop', value:'scaleShowLabelBackdrop', isBoolean: true},
      {key:'chartjsScaleBackdropColor', value:'scaleBackdropColor'},
      {key:'chartjsScaleBackdropPaddingY', value:'scaleBackdropPaddingY', isNumber: true},
      {key:'chartjsScaleBackdropPaddingX', value:'scaleBackdropPaddingX', isNumber: true},
      {key:'chartjsAngleShowLineOut', value:'angleShowLineOut', isBoolean: true},
      {key:'chartjsAngleLineColor', value:'angleLineColor'},
      {key:'chartjsAngleLineWidth', value:'angleLineWidth', isNumber: true},
      {key:'chartjsPointLabelFontFamily', value:'pointLabelFontFamily'},
      {key:'chartjsPointLabelFontStyle', value:'pointLabelFontStyle'},
      {key:'chartjsPointLabelFontSize', value:'pointLabelFontSize', isNumber: true},
      {key:'chartjsPointLabelFontColor', value:'pointLabelFontColor'},
      {key:'chartjsPointDot', value:'pointDot', isBoolean: true},
      {key:'chartjsPointDotRadius', value:'pointDotRadius', isNumber: true},
      {key:'chartjsPointDotStrokeWidth', value:'pointDotStrokeWidth', isNumber: true},
      {key:'chartjsDatasetStroke', value:'datasetStroke', isBoolean: true},
      {key:'chartjsDatasetStrokeWidth', value:'datasetStrokeWidth', isNumber: true},
      {key:'chartjsDatasetFill', value:'datasetFill', isBoolean: true},
      {key:'chartjsAnimation', value:'animation', isBoolean: true},
      {key:'chartjsAnimationSteps', value:'animationSteps', isNumber: true},
      {key:'chartjsAnimationEasing', value:'animationEasing'}
    ];

    for (var i = 0; i < potentialOptions.length; i++) {
      if (scope.hasOwnProperty(potentialOptions[i].key) && scope[potentialOptions[i].key] !== undefined) {
        options[potentialOptions[i].value] = scope[potentialOptions[i].key];
      }
    }

    return options;
  };

  var chartjsRadar = {
    restrict: 'E',
    //compile: compilationFunction,
    template: '<canvas class="ang-chartjs-radar"></canvas>',
    scope: {
      chartjsModel: '=',
      chartjsWidth: '=',
      chartjsHeight: '=',
      chartjsScaleOverlay: '=',
      chartjsScaleOverride: '=',
      chartjsScaleSteps: '=',
      chartjsScaleStepWidth: '=',
      chartjsScaleStartValue: '=',
      chartjsScaleShowLine: '=',
      chartjsScaleLineColor: '=',
      chartjsScaleLineWidth: '=',
      chartjsScaleShowLabels: '=',
      chartjsScaleLabel: '=',
      chartjsScaleFontFamily: '=',
      chartjsScaleFontSize: '=',
      chartjsScaleFontStyle: '=',
      chartjsScaleFontColor: '=',
      chartjsScaleShowLabelBackdrop: '=',
      chartjsScaleBackdropColor: '=',
      chartjsScaleBackdropPaddingY: '=',
      chartjsScaleBackdropPaddingX: '=',
      chartjsAngleShowLineOut: '=',
      chartjsAngleLineColor: '=',
      chartjsAngleLineWidth: '=',
      chartjsPointLabelFontFamily: '=',
      chartjsPointLabelFontStyle: '=',
      chartjsPointLabelFontSize: '=',
      chartjsPointLabelFontColor: '=',
      chartjsPointDot: '=',
      chartjsPointDotRadius: '=',
      chartjsPointDotStrokeWidth: '=',
      chartjsDatasetStroke: '=',
      chartjsDatasetStrokeWidth: '=',
      chartjsDatasetFill: '=',
      chartjsAnimation: '=',
      chartjsAnimationSteps: '=',
      chartjsAnimationEasing: '='
    },
    link: function (scope, elements, attributes) {
      scope.$watch('chartjsModel', function (newValue) {
        if (newValue !== undefined) {
          var options = getOptionsFromScope(scope);

          if (scope.chart !== undefined) {
            scope.chart.Radar(newValue, options);
          } else {
            var width = scope.chartjsWidth || '400';
            var height = scope.chartjsHeight || '400';

            var canvas = elements[0].children[0];
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);

            var chart = new Chart(canvas.getContext('2d'));
            chart.Radar(newValue, options);
            scope.chart = chart;
          }
        }
      }, true);
    }
  };
  return chartjsRadar;











































  var compilationFunction = function (templateElement, templateAttributes, transclude) {
    if (templateElement.length === 1) {
      var node = templateElement[0];

      var width = node.getAttribute('data-chartjs-width') || '400';
      var height = node.getAttribute('data-chartjs-height') || '400';

      var canvas = document.createElement('canvas');
      canvas.setAttribute('width', width);
      canvas.setAttribute('height', height);
      canvas.setAttribute('data-chartjs-model', node.getAttribute('data-chartjs-model'));

      var options = {};

      var potentialOptions = [

      ];

      for (var i = 0; i < potentialOptions.length; i++) {
        var aKey = node.getAttribute(potentialOptions[i].key);
        if (aKey && potentialOptions[i].isBoolean) {
          if ('true' === aKey) {
            options[potentialOptions[i].value] = true;
          } else if ('false' === aKey) {
            options[potentialOptions[i].value] = false;
          }
        } else if (aKey && potentialOptions[i].isNumber) {
          options[potentialOptions[i].value] = parseInt(aKey);
        }else if (aKey) {
          options[potentialOptions[i].value] = aKey;
        }
      }

      var chart = new Chart(canvas.getContext('2d'));
      node.parentNode.replaceChild(canvas, node);

      return {
        pre: function preLink(scope, instanceElement, instanceAttributes, controller) {
          var expression = canvas.getAttribute('data-chartjs-model');
          scope.$watch(expression, function (newValue, oldValue) {
            var callback = scope[node.getAttribute('data-chartjs-on-animation-complete')];
            if (callback !== undefined) {
              options.onAnimationComplete = callback;
            }

            chart.Radar(newValue, options);
          }, true);
        },
        post: function postLink(scope, instanceElement, instanceAttributes, controller) {}
      };
    }
  };

  var chartjsBar = {
    compile: compilationFunction,
    replace: true
  };
  return chartjsBar;
}]);
