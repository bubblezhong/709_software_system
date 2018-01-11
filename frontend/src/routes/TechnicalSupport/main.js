import React, { PropTypes } from 'react';

const UpgradePerfect = (props) => {
  const { dictionary = [], authority = [] } = props;

  // 生成 字段字典
  const dictionaryMap = {
    // target_modules: {},
    // target_page: {},
    // authority_name: {},
    // department_type: {}, // 单位类型
    // authority_type: {},
  };
  // 生成 过滤项
  const dictionaryFilter = {
    // target_modules: [],
    // target_page: [],
    // department_type: [], // 单位类型
    // authority_name: [],
    // authority_type: [],
  };
  dictionary.forEach((item) => {
    if (dictionaryMap[item.key] && dictionaryFilter[item.key]) {  // 防止 由 异常数据导致的 错误
      console.log('item.key', item.key);
      dictionaryMap[item.key][item.value] = item.label;
      dictionaryFilter[item.key].push({ text: item.label, value: item.value });
    }
  });

  const childrenWithProps = React.Children.map(props.children,
    child => React.cloneElement(child, {
      dictionaryMap,
      dictionaryFilter,
      authority,
    })
  );

  return (
    <div>
      {childrenWithProps}
    </div>
  );
};

UpgradePerfect.propTypes = {
  dictionary: PropTypes.object,
  authority: PropTypes.object,
  children: PropTypes.node,
};


export default UpgradePerfect;
