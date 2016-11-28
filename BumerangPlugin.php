<?php
namespace Craft;

class BumerangPlugin extends BasePlugin
{

	public function init()
	{
		parent::init();
		if (craft()->request->isCpRequest()) {
			$this->_start();
		}
	}

	public function getName()
	{
		return Craft::t('Bumerang');
	}

	public function getVersion()
	{
		return '0.1';
	}

	public function getDeveloper()
	{
		return 'Andreas Schmelas';
	}

	public function getDeveloperUrl()
	{
		return 'https://github.com/m9dfukc/craft-bumerang';
	}

	private function _start()
	{
		craft()->templates->includeJsResource('bumerang/js/bumerang.js');
	}

}
